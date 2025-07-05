const express = require('express');
const router = express.Router();

//cookie parser
const parser = require('cookie-parser');
// encryption and authentication middleware
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//database schema
const User = require('../database/user/userSchema');

//
require('dotenv').config();

router.post('/signIn',async(req,res)=>
    {
        console.log(req.body);

        // Database operation to add user
        const {name,email,pass} = req.body;
        const hashedPass = bcrypt.hashSync(pass,10);

        // checking if user already exist
            const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ status: 'error', message: 'User already exists' });
        }
        let user = await User.create({
            name,
            email,
            password: hashedPass,
        })
        let token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.cookie(token,{httpOnly:true,secure:false,sameSite:'strict'})
        res.status(200).json({status:'success', message:'User signed in successfully',user});
    })
router.post('/logIn',async(req,res)=>
    {
        console.log(req.body);

        // Database operation to authenticate user
        const {email,pass} = req.body;
        let currUser = await User.findOne({email});
        console.log(currUser);
        if(!currUser)
        {
            return res.status(404).json({status:'error',message:'User not found'});
        }
        
        let isMatch= await bcrypt.compare(pass,currUser.password)
        if(isMatch)
        {

            const token = jwt.sign({userId:currUser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
            res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'strict' });
            res.status(200).json({status:'success',message:'User logged in successfully',token});
        }
        else
        {
           return res.status(404).json({status:'error',message:'Invalid credentials'});
        }
    })
module.exports = router;