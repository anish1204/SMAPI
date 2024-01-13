const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bodyParser = require('body-parser');

// router.get('/',(req,res)=>{
//     res.send('router wala ha yeh')
// })

// crud user

//update user
router.put("/:id", bodyParser.json(), async (req, res) => {
    const UserId = req.params.id;
    // res.send(req.body.userId);
    // res.send('Recieved id' + UserId + ' also '+ req.params.id);
    if (req.params.id) {
        try {
            const user = await User.findByIdAndUpdate(UserId, {
                $set: req.body
            });
            res.status(200).json('Updated Successfully')

        }
        catch (err) {
            console.log(err);
        }
    }

});

//delete user
router.delete('/:id', bodyParser.json(), async (req, res) => {
    const userId = req.body.id;
    const UrlId = req.params.id;
    res.send(userId + '  ' + UrlId);
    if (userId === UrlId) {
        const user = await User.findOneAndDelete(UrlId);

    }
});

//follow user
router.put('/:id/follow', bodyParser.json(), async (req, res) => {
    const CurrentUser = req.body.id;
    const TargetUser = req.params.id;
    if (CurrentUser !== TargetUser) {
        try {
            const user = await User.findById(CurrentUser);
            const user2 = await User.findById(TargetUser);
            if (!user.followers.includes(CurrentUser)) {
                await user.updateOne({ $push: { followers: TargetUser } });
                await user2.updateOne({ $push: { following: CurrentUser } });
                res.status(200).json('Successfully Done');
            }
            else {
                res.status(402).json('You already Follow the account');
            }
        }
        catch (err) {
            console.log(err);
        }

    }
    else {
        res.status(400).json('You cant follow yourself');
    }
});

//unfollow
router.put('/:id/unfollow', bodyParser.json(), async (req, res) => {
    const CurrentUser = req.body.id;
    const TargetUser = req.params.id;
    if (CurrentUser !== TargetUser) {
        try {
            const user = await User.findById(CurrentUser);
            const user2 = await User.findById(TargetUser);
            if (user.followers.includes(TargetUser)) {
                await user.updateOne({ $pull: { followers: TargetUser } });
                await user2.updateOne({ $pull: { following: CurrentUser } });
                res.status(200).json('Successfully Done');
            }
            else {
                res.status(403).json('You do not Follow the account');
            }
        }
        catch (err) {
            console.log(err);
        }

    }
    else {
        res.status(400).json('You cant follow yourself');
    }
});

module.exports = router;