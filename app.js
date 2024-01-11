const express = require('express');
const app=express();
const mongoose = require('mongoose');
const Userrouter = require('./routes/user-route');
const authRoute = require('./routes/auth-route');
const bodyParser = require('body-parser')
app.use(express.urlencoded())

mongoose.connect('mongodb://localhost:27017/myapp').then(()=>{
    console.log('MongoDb Connected');
})


app.use('/api/user',bodyParser.urlencoded(),Userrouter);
app.use('/api/auth',bodyParser.urlencoded(),authRoute);



app.listen(5000,()=>{
    console.log('Server is Ruuing');
})

app.get('/user',(req,res)=>{
    //req.body({username,email,password});
    res.send('hello world')
})
app.get('/user',(req,res)=>{
    res.send('User Page here')
})
