const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const { check, validationResult} = require("express-validator/check");
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())
const mongoose = require("mongoose")
const routes = require("./routes")
const port = process.env.PORT || 5000;
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const userModel = require("./model/userModel")

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

mongoose
	.connect("mongodb+srv://Shivani0109:Shivani1998@cluster0.jxphq.mongodb.net/RentmyApparel?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true })
	.then(() => {

		app.get('/', (req, res) => {
			res.status(200).send('Welcome to Assignment 3')
		})

		app.use("/api", routes)

		app.listen(port, () => {
			console.log(`Listening on port ${port}...`)
		})
})

const contactEmail = {
    host: 'smtp.gmail.com',
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

router.post(
    "/signup",
    [
        check("user_id", "Please Enter a Valid User Name").not().isEmpty(),
        check("user_name", "Please Enter a Valid Username")
            .not()
            .isEmpty(),
        check("user_email", "Please enter a valid email").isEmail(),
        check("user_password", "Please enter a valid password").isLength({
            min: 6
        })
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            user_id,
            user_name,
            user_email,
            user_password,
        } = req.body;
        try {
            let user = await userModel.findOne({
                user_email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            user = new userModel({
                user_id,
                user_name,
                user_email,
                user_password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user_password, salt);

            await user.save();

            const payload = {
                user: {
                    user_id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);



