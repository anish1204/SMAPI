const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('router wala ha yeh')
})

module.exports=router;