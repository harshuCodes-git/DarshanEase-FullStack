const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admin",
    }
})

module.exports = mongoose.model('Admins',AdminSchema)