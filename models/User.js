const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        minlength:3
    },
    password:{
        type:String,
        unique:true
    }
})


module.exports = mongoose.model("User",UserSchema)