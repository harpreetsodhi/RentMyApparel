const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  user_firstName: String,
  user_lastName: String,
  user_address: String,
  user_address2: String,
  user_city: String,
  user_province: String,
  user_postalCode: String,
  isComplete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("users", UserSchema);
