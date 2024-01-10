const express=require('express');
const { route } = require('./user-route');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Auth wala hai yeh')
})

module.exports = router;