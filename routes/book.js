const express = require('express');

const router = express.Router();

var books=[];

router.get("/", (req,res,next)=>{
    res.send(books);
});

router.post('/',(req,res)=>{
    const bookDetailEntered = req.body;
    books.push(bookDetailEntered);
    res.send(`Book Details has been entered Successfully`);
});

module.exports = router;




