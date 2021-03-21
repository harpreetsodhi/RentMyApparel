// @Author - Harpreet Singh

const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user_id: {
      type: String,
      required: true
    },
    product_id: {
      type: String
    }
  })

module.exports = mongoose.model("Cart", cartSchema)