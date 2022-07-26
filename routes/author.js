const express = require('express');

const router = express.Router();

let author = [];

router.get("/",(req,res,next)=>{
    res.send(author);
})

router.post("/",(req,res,next)=>{
    const authorAdded = req.body;
    res.send('The author has been added successfully');
})


module.exports = router;