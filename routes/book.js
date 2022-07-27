const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController')

//var books=[];

router.get("/", bookController.getAllBooks);

router.post('/',bookController.addBookData);

module.exports = router;




