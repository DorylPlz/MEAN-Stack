const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    },
    type:{
        type: Number,
        required: true
    }
})

const User = module.exports = mongoose.model("User", UserSchema);