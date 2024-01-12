const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bodyParser = require('body-parser');

// router.get('/',(req,res)=>{
//     res.send('router wala ha yeh')
// })

// crud user

//update user

router.put("/:id", bodyParser.json() ,async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,

            });
            res.status(200).json('Account has been updated')
        }
        catch (err) {
            console.log("Hi "+err);
        }
    }
    else {
        return res.status(403).json('Error mila ha')
    }
});


module.exports = router;