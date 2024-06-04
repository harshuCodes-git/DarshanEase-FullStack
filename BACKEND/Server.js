//server.js
const express = require('express');
const bodyParser = require('body-parser');
require('./db/config')
const cors = require('cors');
const app = express();

//importing api's
const userRoutes = require('./Routing/Users')
const organiserRoutes = require('./Routing/Organizers')
const adminRoutes = require('./Routing/Admins')

app.use(bodyParser.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET","DELETE","PUT"],
    credentials:true
}));
app.use('/user',userRoutes);
app.use('/organiser',organiserRoutes);
app.use('/admin',adminRoutes);

app.listen(9000,()=>{
    console.log("Port is listening at 9000");
});