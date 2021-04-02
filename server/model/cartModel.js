// @Author - Harpreet Singh

const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user_id: {
      type: String,
      required: true
    },
    product_id: {
      type: String,
      required: true
    },
    product_title: {
      type: String,
      required: true
    },
    product_desc: {
      type: String,
      required: true
    },
    product_size: {
      type: String,
      required: true
    },
    product_img: {
      type: String,
      required: true
    },
    product_color: {
      type: String,
      required: true
    },
    event_date: {
      type: String
    },
    product_type: {
      type: String,
      required: true
    },
    days: {
      type: Number,
      required: true
    },
    product_price: {
      type: Number,
      required: true
    }
  })

module.exports = mongoose.model("Cart", cartSchema)