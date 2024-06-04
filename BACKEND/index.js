const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin')
   .then(() =>{
    console.log("Connected to mogodb")
   })
   .catch(()=>{
     console.log("Error")
   });


const app = express();
app.use(cors());
app.get('/',(req,res) =>{
    res.send("Welcome to backend demo")
})

app.listen(7000,()=>{
    console.log("Server is listening at port 7000")
})