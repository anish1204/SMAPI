const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        max:50
    },
    
    // profilePicture:{
    //     type:String,
    //     default:""
    // },
    // coverPicture:{
    //     type:String,
    //     default:""
    // },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    // isAdmin:{
    //     type:Boolean,
    //     default:false
    // }
});


module.exports = mongoose.model("User",UserSchema);