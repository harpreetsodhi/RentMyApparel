//Author - Shivani Sharma
// @Author - Harpreet Singh

const express = require("express");
const Cart = require("./model/cartModel");
const userModel = require("./model/userModel");
var cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
const productModel = require("./model/productModel");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");
const donationModel = require("./model/donationModel");
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(cors());

router.get("/products", cors(), async (req, res) => {
  productModel
    .find()
    .exec()
    .then((result) => {
      res.status(200).json({ message: "Fetching ...", result });
    });
});

router.get("/singleproduct/:productId", cors(), (req, res) => {
  try {
    let product_id = req.params.productId;

    searchProduct("product_id", product_id)
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({ message: result });
      });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: error.message,
    });
  }
});

//get items in the cart for a specific user
router.get("/cart/:user_id", async (req, res) => {
  const items = await Cart.find({ user_id: req.params.user_id });
  product_ids = [];
  items.forEach(function (item) {
    product_ids.push(item.product_id);
  });
  const products = await productModel.find({
    product_id: { $in: product_ids },
  });
  res.send(products);
});

// remove an item from the cart for a specific user
router.get("/cart/:user_id/:product_id", async (req, res) => {
  Cart.deleteOne(
    { user_id: req.params.user_id, product_id: req.params.product_id },
    function (err) {
      if (!err) {
        message = "removed";
      } else {
        message = "error";
      }
    }
  );
  res.status(200).send("success");
});

// add a new item to the cart
router.post("/cart", async (req, res) => {
  const item = new Cart({
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  });
  await item.save();
  res.send(item);
});

// AUTHOR : NEELKANTH DABHI
// REF : https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i

router.post(
  "/signup",
  [
    check("user_id", "Please Enter a Valid User Name").not().isEmpty(),
    check("user_name", "Please Enter a Valid Username").not().isEmpty(),
    check("user_email", "Please enter a valid email").isEmail(),
    check("user_password", "Please enter a valid password").isLength({
      min: 4,
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { user_id, user_name, user_email, user_password } = req.body;
    try {
      let user = await userModel.findOne({
        user_email,
      });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }
      user = new userModel({
        user_id,
        user_name,
        user_email,
        user_password,
      });

      const salt = await bcrypt.genSalt(10);
      user.user_password = await bcrypt.hash(user_password, salt);

      await user.save();
      res.status(200).send("User Saved to DB");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

// AUTHOR : NEELKANTH DABHI
// REF : https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
router.post(
  "/login",
  [
    check("user_email", "Please enter a valid email").isEmail(),
    check("user_password", "Please enter a valid password").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { user_email, user_password } = req.body;
    try {
      let user = await userModel.findOne({
        user_email,
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist",
        });

      const isMatch = await bcrypt.compare(user_password, user.user_password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !",
        });

      Constants.CURRENT_USER = user.user_id;
      console.log(
        "User with uid: " + Functions.getCurrentUserID() + " is logged In"
      );
      res.status(200).json({
        message: "User logged-In Sucessfully",
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

// @Author - Rajveen Singh
router.post("/donate", (req, res, next) => {
  const donation = new donationModel({
    name: req.body.name,
    email: req.body.email,
    description: req.body.desc,
    image: req.body.image,
  });

  donation
    .save()
    .then((result) => {
      res.json({
        success: true,
        document: result,
      });
    })
    .catch((err) => next(err));
});

const contactEmail = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ss747922@gmail.com",
    pass: "Shivani1998!",
  },
};

var transporter = nodemailer.createTransport(contactEmail);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", cors(), (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;
  const mail = {
    from: name,
    to: "ShivaniSharma@dal.ca",
    subject: "Contact Form Message",
    html: `<p>Name: ${name}</p>
			 <p>Email: ${email}</p>
			 <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;
