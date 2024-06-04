const mongoose=require('mongoose')

const addevent = new mongoose.Schema({
    organizerId: {type: mongoose.Schema.Types.ObjectId, ref: "user" },
    organizerName: {type: String,ref: "user" },
    templeName: {type: String,required: true },
    description: {type: String, required: true },
    open: {type: String, required: true },
    close: {type: String,required: true },
    location: {type: String,required: true },
    templeImage: {type: String,required: true },
});

module.exports=mongoose.model('temples',addevent)