// @Author - Harpreet Singh

const express = require('express')
const app = express()
const cors = require('cors');
app.options('*', cors())
app.use(express.json())
const mongoose = require("mongoose")
const routes = require("./routes")
const port = process.env.PORT || 5000;
const router = express.Router();



mongoose
	.connect("mongodb+srv://Shivani0109:Shivani1998@cluster0.jxphq.mongodb.net/RentmyApparel", { useNewUrlParser: true,  useUnifiedTopology: true })
	.then(() => {

		app.get('/', (req, res) => {
			res.status(200).send('Welcome to Assignment 3')
		})

		app.use("/api", routes)

		app.listen(port, () => {
			console.log(`Listening on port ${port}...`)
		})
});

