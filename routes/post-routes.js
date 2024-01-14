const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const bodyParser = require('body-parser');


// create a post
router.post('/', bodyParser.json(), async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json('Post saved Successfully')
    } catch (err) {
        console.log(err);
    }
})
// update a post
router.put('/:id', bodyParser.json(), async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (req.body.id === req.params.id) {
        try {
             await post.updateOne({
                $set:req.body
            });
            res.status(200).json('Updated Successfully Post');
        }
        catch (err) {
            console.log(err);
        }
    }
    else
    {
        res.status(500).json('Cannot find Requirements')
    }

})

// delete a post
router.delete('/:id',bodyParser.json(),async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(req.body.id === req.params.id)
    {
        await Post.findOneAndDelete();
        res.status(200).json('Post Deleted SuccessFully')
    }
    else
    {
        res.status(500).json('Cannot delete someones else post')
    }
})


// like a post
router.put('/:id/like',bodyParser.json(),async(req,res)=>{
    const likeid = req.body.id;
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(likeid))
    {
        await post.updateOne({
            $push:{likes:req.body.id}
        })
        res.status(200).json('Liked Post ');
    }
    else
    {
        res.status(500).json('You have already liked this post');
    }
})




module.exports = router;