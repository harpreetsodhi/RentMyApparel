const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("users", UserSchema);