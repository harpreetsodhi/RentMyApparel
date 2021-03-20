const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require("mongoose")
const routes = require("./routes")
const port = process.env.PORT || 5000;
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
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

