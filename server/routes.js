//Author - Shivani Sharma
// @Author - Harpreet Singh

const express = require("express");
const stripe = require("stripe")("sk_test_51IbYPpALkSJauFTT4UZi6QjTbqs8fDCQxlHz3fNdy9NbX5wCVrQ3DDhK2adeaSowFsuaaTzzjfXkjdHyqQkuldMo00uHiex319");
const uuid = require("uuidv4");
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
const { searchProduct } = require("./controllers/productController.js");

router.use(bodyParser.json());
router.use(cors());

//Author: Shivani
//API to get Only Thrift Products//
router.get("/products/thrift", cors(), async (req, res) => {
  try {
    productModel
      .find({ product_type: "thrift" })
      .exec()
      .then((result) => {
        res.status(200).json({ message: "Fetching ...", result });
      });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: error.message,
    });
  }
});

// AUTHOR : NEELKANTH DABHI
// Api to get only rental products
router.get("/products/rental", cors(), async (req, res) => {
  try {
    productModel
      .find({ product_type: "rental" })
      .exec()
      .then((result) => {
        res.status(200).json({ message: "Fetching ...", result });
      });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: error.message,
    });
  }
});

//Author: Shivani Sharma
//Api to get products based on product title//

router.get("/products/title/:title", async (req, res) => {
  const product = await productModel.findOne({
    product_title: req.params.title,
    product_type: "thrift",
  });
  res.send(product);
});

// Author: Harpreet Singh
// get a product on product click
router.get("/products/:product_id", async (req, res) => {
  const product = await productModel.findOne({ product_id: req.params.product_id });
  res.send(product);
});

// Author: Harpreet Singh
//get items in the cart for a specific user
router.get("/cart/:user_id", async (req, res) => {
  const products = await Cart.find({ user_id: req.params.user_id });
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

  const existingItem = await Cart.findOne({
    user_id: req.body.user_id,
    product_id: req.body.product_id
  });

  if (existingItem === null){
    const item = new Cart({
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      product_title: req.body.product_title,
      product_desc: req.body.product_desc,
      product_size: req.body.product_size,
      product_img: req.body.product_img,
      product_color: req.body.product_color,
      event_date: req.body.event_date,
      product_type: req.body.product_type,
      days: req.body.days,
      product_price: req.body.product_price
    });

    await item.save();
    res.send(item);
  }
  else{
    res.send("Item already exists!")
  }
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
      res.status(200).json({
        user_id: user.user_id,
        user_name: user.user_name,
        isComplete: user.isComplete,
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
// Api to submit donation request
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

// @Author - Rajveen Singh
// Api to get information about completeness of user details
router.get("/account-setup", cors(), async (req, res, next) => {
  try {
    console.log(req);
    userModel
      .findOne({ user_id: req.query.user_id })
      .exec()
      .then((result) => {
        console.log(result);
        result.user_password = undefined;
        if (result.isComplete) {
          res.status(200).json({ complete: true });
        }
        else {
          res.status(200).json({ complete: false });
        }
        
      })
      .catch((err) => next(err));
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: error.message,
    });
  }
});

// @Author - Rajveen Singh
// Api to get user account information
router.get("/account", cors(), async (req, res, next) => {
  try {
    console.log(req);
    userModel
      .findOne({ user_id: req.query.user_id })
      .exec()
      .then((result) => {
        console.log(result);
        result.user_password = undefined;
        res.status(200).json({ success: true, result });
      })
      .catch((err) => next(err));
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: error.message,
    });
  }
});

// @Author - Rajveen Singh
// Api to post user account information
router.post("/account", (req, res, next) => {
  const userInfo = {
    // user_id: req.body.user_id,
    user_firstName: req.body.firstName,
    user_lastName: req.body.lastName,
    user_address: req.body.address,
    user_address2: req.body.address2,
    user_city: req.body.city,
    user_province: req.body.province,
    user_postalCode: req.body.postalCode,
    isComplete: req.body.isComplete
  };

  userModel.findOneAndUpdate(
    {user_id: req.body.user_id},
    userInfo,
    {new: true},
    (err, doc) => {
      if(err) next(err);
      doc.user_password = undefined;
      return res.json({
        success: true,
        document: doc,
      });
    }
  );
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

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;
  const mail = {
    from: email,
    to: "ShivaniSharma@dal.ca",
    subject: "Contact Form Message",
    html: `<p>Name: ${name}</p>
			 <p>Email: ${email}</p>
			 <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ status: error.message });
    } else {
      res.json({
        status: "Your Message is Received - we will contact you soon!",
      });
    }
  });
});


router.post("/checkout", async (req,res)=>{
  // console.log("Request:", typeof(req.body.items));
  
  let error;
  let status;
  try{
    let amt = 0;
    for(product in req.body.items){
      console.log("this: " + product);
      amt += req.body.items[product].product_price;
    }
    const token = req.body.token;
    
    

    const customer = await
    stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotence_key = uuid;
    const charge = await stripe.charges.create(
      {
        amount: amt*100,
        currency: "cad",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased`,
        shipping: {
          name: token.card.name,
          address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
          }
        }
      }
    );
      console.log("Charge:", { charge });
      status= "success";
  } catch(error){
    console.log("Error", error);
    status= error;
  }
  res.json({error, status});
});


module.exports = router;
