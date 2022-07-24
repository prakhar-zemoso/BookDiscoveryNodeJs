const express = require('express');

const router = express.Router();

const authorController = require('../controllers/authorController');

let author = [];

router.get("/",authorController.getAllAuthor);


router.post("/",authorController.addAuthorData);


module.exports = router;