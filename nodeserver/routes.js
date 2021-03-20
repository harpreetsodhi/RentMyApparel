const express = require("express")
var bodyParser = require('body-parser');
const Cart = require("./model/cartModel")
const productModel = require("./model/productModel");
const { searchProduct } = require("./controller/productController");
const router = express.Router()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.get("/cart", async (req, res) => {
	const items = await Cart.find()
	res.send(items)
})


module.exports = router