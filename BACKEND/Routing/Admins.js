const express = require('express');
const router = express.Router();
const Admin=require('../db/Admin/AdminSchema');
const temples = require('../db/Organizer/TempleSchema');
const darshans = require('../db/Organizer/DarshanSchema');


router.post('/alogin', (req,res) => {
    const { email, password } = req.body;
    Admin.findOne({email: email })
    .then(user => {
        if(user) {
            if(user.password === password) {
                return res.json({Status: "Success",user: {id:user.id,name: user.name,email: user.email}})
            } else {
                res.json("login fail")
            }
        } else {
            res.json("no user")
        }
    })
})

// signup 
router.post('/asignup',(req,res)=>{
    const {name,email,password}=req.body;
    Admin.findOne({email: email})
    .then(use => {
        if(use){
            res.json("Already have an account")
        } else {
            Admin.create({email: email,name: name,password: password})
            .then(result => res.json("Account Created"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json("failed "))
})





module.exports = router;