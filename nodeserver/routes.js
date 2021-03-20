const express = require("express")
const Cart = require("./model/cartModel")
const router = express.Router()

router.get("/cart", async (req, res) => {
	const items = await Cart.find()
	res.send(items)
})



module.exports = router