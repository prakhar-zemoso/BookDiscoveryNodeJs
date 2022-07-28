const express = require('express');

const router = express.Router();

const authorController = require('../controllers/authorController');

let author = [];


router.post("/",authorController.createAuthor);
router.get("/books",authorController.myBookAuthor);
router.get("/",authorController.findAllAuthors);
router.get("/:id",authorController.findOne);
router.put("/:id",authorController.update);
router.delete("/:id",authorController.delete);


module.exports = router;