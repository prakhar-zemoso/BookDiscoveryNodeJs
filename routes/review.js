const express = require('express');

const router = express.Router();

const reviewController = require('../controllers/reviewController');


router.get("/",reviewController.findAllReviews);
router.post('/',reviewController.createReview);
router.get('/:id',reviewController.findReviewById);
router.get('/reviewOnBook/:id',reviewController.reviewByBook);


module.exports = router;