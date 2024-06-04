const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/admin')
.then(()=>console.log("connected"))
.catch(()=>console.log("error"))
