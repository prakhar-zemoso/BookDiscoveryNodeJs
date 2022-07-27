const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');
//const router = require('./author');

router.post('/',categoryController.createAuthor);
router.get('/',categoryController.findAll);
router.get('/:id',categoryController.findById);
router.put('/:id',categoryController.update);
router.get('/bookscategory/:id',categoryController.findBooksInCategory);


module.exports = router;