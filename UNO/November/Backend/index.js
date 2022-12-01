const exp = require('express');
const app = exp();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/Post');

mongoose.connect("mongodb://localhost/uno").then(()=>{
    console.log("connected successfully");
}).catch(()=>{
    console.log("connection failed");
});

app.use(bodyParser.json());

console.log("hello world");



app.get('',(req,res)=>{
        res.status(200).json({
            message:"succesfully data is sent" 
        })
});

app.post('',(req,res)=>{
     console.log(req.body);
     const result = new Post({
        employee: req.body.employee,
        salary:Number(req.body.salary),
        status:req.body.status
     });
     result.save().then((result)=>{
        res.status(201).json({
            message:"added data",
            list:result
         })
     }).catch((err)=>{
        res.status(400).json({
            message:"error response",
            list:err
         })
     })
});

app.get('/index',(req,res)=>{
      res.send('<div><h1>Welcome to Nodejs</h1><h2>Full stack application</h2></div>')
});

app.listen(8080,()=>{
    console.log("server is running on port 3020")
});

