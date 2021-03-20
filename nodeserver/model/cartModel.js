const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user_id: {
      type: String
    },
    product_id: {
      type: String
    }
  })

module.exports = mongoose.model("cartModel", cartSchema)