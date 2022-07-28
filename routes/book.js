const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController')

//var books=[];

router.get("/", bookController.bookDetails);
router.post('/',bookController.createBook);
router.get('/:id',bookController.findBookId);
router.put('/:id',bookController.updateBook);
router.get("/book/reviews/:id", bookController.findAllReviewsOnBook);


module.exports = router;




