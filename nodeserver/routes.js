const express = require("express")
var bodyParser = require('body-parser');
const Cart = require("./model/cartModel")
const productModel = require("./model/productModel");
const { searchProduct } = require("./controller/productController");
const router = express.Router()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/products',  (req,res)=>{
    productModel.find()
    .exec()
    .then(result => {
        console.log("Result: " + result);
        res.status(200).json({message: "Fetching ...", result});
    })
});

router.get('/singleproduct/:productId', (req,res)=>{
    try{
        let product_id = req.params.productId;
        
        searchProduct("product_id", product_id).exec()
        .then(result => {
            console.log(result);
            res.status(200).json({message: result});
        })
    }catch(error){
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }
});

router.get("/cart", async (req, res) => {
	const items = await Cart.find()
	res.send(items)
})


module.exports = router