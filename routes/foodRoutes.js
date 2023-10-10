const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// POST /food/add
router.post('/add', foodController.addFood);

// GET /food/all
router.get('/all', foodController.getAllFood);

// POST /food/quantity
router.post('/changeQuantity', foodController.changeQuantity);

//POST /food/resetQuantity
router.post('/resetQuantity', foodController.resetQuantity);

module.exports = router;
