const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loginSignup = require('./router/loginSignupRout');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

app.use('/auth',loginSignup);
// app.use('/',(req,res,next)=>{
//     res.send("this is new")
// })

mongoose.connect("mongodb+srv://Rosanakthar:9994765825@cluster0.sei7q.mongodb.net/implife?retryWrites=true&w=majority")
.then(result => {
    console.log("Connect");
}).catch(err => {
    console.log(err);
})
app.listen('5001',()=>{
    console.log('http://localhost:5001');
})