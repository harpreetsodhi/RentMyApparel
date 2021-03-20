const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    product_id:{
        type: String
    },
    product_type: {
        type: String
    },
    product_price: {
        type: Number
    },
    product_title:{
        type: String
    },
    product_desc: {
        type: String
    },
    product_img:{
        type: String
    },
    product_size: {
        type: String
    },
    product_color:{
        type: String
    }
})

module.exports = mongoose.model("Products", productSchema)