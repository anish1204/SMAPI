const express = require('express');
const { route } = require('./user-route');
const User = require('../models/User');
const bodyParser = require('body-parser');
const router = express.Router();

//body parser wala ekk yaad rakhna


router.post('/register',bodyParser.json(),async (req, res) => {
    try{
        const newUser = await new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            
        })
        const user = newUser.save();
        res.status(200).json('user added');
        //console.log(req.body.email);
    }
    catch(err)
    {
        console.log(err);
    }

});

//Login
router.post('/login', bodyParser.json(),async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if(user) res.status(200).json('user found')
        !user && res.status(404).json('user not found');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;