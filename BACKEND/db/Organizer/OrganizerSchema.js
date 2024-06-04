const mongoose = require('mongoose');

const  organizerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organizer",
    }
})

module.exports = mongoose.model('Organizer',organizerSchema)