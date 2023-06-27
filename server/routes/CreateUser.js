const express = require('express');
const router = express.Router()

const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = 'MynameisSriyanSingh1802$#';


router.post("/createuser", 
[
    body('name').isLength({min:2}),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], 
async(req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors: errors.array()});
    }

//  hash pswd start 
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    
//  hash pswd end 

    try {
        await User.create({
            // name: "sohan",
            // email: "sohan123@gmail.com",
            // password: "sohan123",
            // location: "HR"
            name:req.body.name,
            email:req.body.email,
            password:secPassword,
            location:req.body.location
        }).then(res.json({success:true}));
        // res.json({success:true})

        return 

    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})




router.post("/loginuser", 
[
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], 
async(req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors: errors.array()});
    }

    let email = req.body.email;
    try {
        let userData = await User.findOne({email});
        if(!userData){
          return res.status(400).json({errors:"Try login with correct credentials"});
        }

        const pswdCompare = await bcrypt.compare(req.body.password, userData.password)

        if(!pswdCompare){
          return res.status(400).json({errors:"Try login with correct credentials"});
        }

// authToken*******
        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret)

        return res.json({success:true, authToken:authToken});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

});


module.exports = router;







// app.post('/signup', function (req, res) {
//     var data = req.body;
    
//     console.log("Name: ", data.name);
//     console.log("Age: ", data.age);
//     console.log("Gender: ", data.gender);
      
//     res.send();
//   });