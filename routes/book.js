const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController')

//var books=[];

router.get("/", bookController.findAllBooks);

router.post('/',bookController.createBook);
router.get('/bookAuthor/:id',bookController.findBookByAuthor);
router.get('/:id',bookController.findBookId);
router.put('/:id',bookController.updateBook);
router.get("/reviewsOnBook/:id", bookController.findAllReviewsOnBook);
router.get("/bookCategory/:id", bookController.findBookCategory);
router.get("/Reading",bookController.isReading)

module.exports = router;




