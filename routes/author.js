const express = require('express');

const router = express.Router();

const authorController = require('../controllers/authorController');

let author = [];

//router.get("/",authorController.getAllAuthor);


router.post("/",authorController.createAuthor);
router.get("/",authorController.findAllAuthors);
router.get("/:id",authorController.findOne);
router.put("/:id",authorController.update);
router.delete("/:id",authorController.delete);
router.get("/bookAuthor/:id",authorController.bookAuthor);

module.exports = router;