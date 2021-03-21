//Author - Shivani Sharma

const productData = require('../model/productModel');

const searchProduct=(key, value) => {
    return productData.findOne({
        product_id: value,
    })
}

const addProduct=(newProduct) => {
    let newproduct_id = newProduct.product_id;

    return productData.findOne({
        product_id: newproduct_id,
    })
}

module.exports.searchProduct = searchProduct;
module.exports.addProduct = addProduct;