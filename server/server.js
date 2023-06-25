const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const adminRoutes=require('./routes/admin')
const cloudinaryRoutes=require('./routes/cloudinary')
const couponRoutes=require('./routes/coupan')
const productRoutes=require('./routes/product')
const stripeRoutes=require('./routes/stripe')
const subRoutes=require('./routes/sub')
const userRoutes=require('./routes/user')






// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

app.use("/api", cloudinaryRoutes);

app.use("/api", couponRoutes);

app.use("/api", productRoutes);

app.use("/api", stripeRoutes);
app.use("/api", subRoutes);

app.use("/api", userRoutes);


const path = require("path");
__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
