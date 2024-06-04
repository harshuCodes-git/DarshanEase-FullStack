const express = require('express');
const router = express.Router();
const User = require('../db/User/UserSchema.js');
const DarshanSchema = require('../db/Organizer/DarshanSchema.js');
const bookings = require('../db/User/UserBooking.js');

router.post('/ulogin',(req,resp)=> {
    const{email,password} = req.body;
    User.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                return resp.json({Status:"Success",user:{id:user.id,name:user.name,email:user.email}})
            }
            else{
                resp.json("login fail")
            }
        }else{
            resp.json("no user")
        }
    })
})

//signup API
router.post('/usignup',(req,resp)=>{
    const{name,email,password} = req.body;
    User.findOne({email:email})
    .then(use =>{
        if(use){
            resp.json("Already have an account")
        }else{
            User.create({email:email,name:name,password:password})
            .then(result => resp.json("Account Created"))
            .catch(err => resp.json(err))
        }
    }).catch(err => resp.json("failed"))
})
//get users
router.get('/users',(req,res)=>{
    User.find()
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch(()=>{
        res.sendStatus(500)
    })
})
router.put('/useredit/:id',(req,res)=>{
    const id = req.params.id;
    const {name,email,password} = req.body;
    User.findByIdAndUpdate(id,{name,email,password},{new:true})
    .then(updatedUser =>{
        res.json(updatedUser);
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
})
router.delete('/userdelete/:id',(req,res)=>{
    let id = req.params.id;
      User.deleteOne({_id:id})
      .then((user)=>{
        res.status(200).json(user)
      })
      .catch(()=>{
        res.sendStatus(500)
      })
})
router.get('/darshan/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const item = await DarshanSchema.findById({_id:id});
        res.json(item);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
router.post('/userbooking',async(req,res)=>{
    const{organiserName,description,prices,name,email,phno,templeName,darshanName,location,templeImage} = req.body;
    try{
        const order = new bookings({organiserName,description,prices,name,email,phno,templeName,darshanName,location})
        await order.save();
        res.status(201).json(order);
    }
    catch(err){
        res.status(400).json({error:'Failed to create policy'});
    }
});
router.get('/getbookings/:userId',async(req,res)=>{
    const userId = req.params.userId;
    try{
        const booking = await bookings.find({userId}).sort('position');
        res.json(booking);
    }
    catch(err){
        res.status(500).json({error:'Failed to fetch tasks'});
    }
});
router.get('/getbookings',(req,res)=>{
    bookings.find()
    .then((bookings)=>{ 
        res.json(bookings)
    })
    .catch((error)=>{
        console.error(error);
        res.status(400).json({error:'Failed to get bookings'});
    });
})
router.delete('/userbookingdelete/:id',(req,res)=>{
    let id = req.params.id;
    bookings.deleteOne({_id:id})
    .then((item)=>{
        res.status(400).json({msg:"No item found"})
    })
})

module.exports = router;
