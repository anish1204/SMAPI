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
    const UserId = req.params.id;
    // res.send(req.body.userId);
    // res.send('Recieved id' + UserId + ' also '+ req.params.id);
    if(req.params.id)
    {
        try{
            const user = await User.findByIdAndUpdate(UserId,{
                $set : req.body
            });
            res.status(200).json('Updated Successfully')

        }
        catch(err)
        {
            console.log(err);
        }
    }

});

router.delete('/:id',bodyParser.json(),async(req,res)=>{
        const userId = req.body.id;
        const UrlId = req.params.id;
        res.send(userId+'  '+UrlId);
        if(userId === UrlId)
        {
            const user = await User.findOneAndDelete(UrlId);
            
        }
})

module.exports = router;