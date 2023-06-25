const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck,saveAddress } = require("../middlewares/auth");

// controller
const { create, remove, list } = require("../controllers/coupan");

// routes
router.post("/coupon", authCheck, adminCheck, create);
router.get("/coupons", list);
router.delete("/coupon/:couponId", authCheck, adminCheck, remove);

module.exports = router;
