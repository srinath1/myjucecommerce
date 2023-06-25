const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupan");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  console.log('Req_Body',req.body)
  const{couponApplied}=req.body
  
  // later apply coupon
  // later calculate price

  const user=await User.findOne({email:req.user.email}).exec()
  const {cartTotal,totalAfterDiscount}=await Cart.findOne({orderedBy:user._id}).exec()
  console.log(cartTotal,totalAfterDiscount)
  let finalAmount=0
  if(couponApplied && totalAfterDiscount){
    finalAmount=totalAfterDiscount*100
  }else{
    finalAmount=cartTotal*100
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount*100,
    currency: "usd",
  });
  console.log('PI',paymentIntent)

  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    totalAfterDiscount,
    payable:finalAmount
  });
};
