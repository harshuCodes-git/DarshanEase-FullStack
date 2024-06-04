const mongoose=require('mongoose')

const darshanSchema = new mongoose.Schema({


    darshanNAme: String,
    templeName: String,
    templeImage: String,
    location: String,
    open: String,
    close: String,
    description: String,
    normal: String,
    vip: String,
    prices: {
        normal: String,
        vip: String,
    },
    organizerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    organizerName: { type: String, ref: "user" },
});

module.exports=mongoose.model('darshans',darshanSchema)