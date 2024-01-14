const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        max:500    
    },
    likes:{
        type:Array,
        default:[]
    }
});

module.exports = mongoose.model("Post",Post);