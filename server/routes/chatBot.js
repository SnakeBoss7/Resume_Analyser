const express = require('express');
const router = express.Router();

router.get('/query',(req,res)=>
    {
        console.log(req.body.query);
    })