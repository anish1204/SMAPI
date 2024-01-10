const express = require('express');
const app=express();
const mongoose = require('mongoose');
const Userrouter = require('./routes/user-route');
const authRoute = require('./routes/auth-route')


mongoose.connect('mongodb://localhost:27017/myapp').then(()=>{
    console.log('MongoDb Connected');
})

app.use('/api/user',Userrouter);
app.use('/api/auth',authRoute);
app.listen(5000,()=>{
    console.log('Server is Ruuing');
})

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/user',(req,res)=>{
    res.send('User Page here')
})
