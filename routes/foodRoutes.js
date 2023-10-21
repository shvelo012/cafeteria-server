const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const { route } = require('./adminRoutes');

// POST /food/add
router.post('/add', foodController.addFood);

// GET /food/all
router.get('/all', foodController.getAllFood);

// POST /food/quantity
router.post('/changeQuantity', foodController.changeQuantity);

//POST /food/resetQuantity
router.post('/resetQuantity', foodController.resetQuantity);

//POST /food/deleteAllFood
router.post('/deleteFood', foodController.deleteAllFood);

module.exports = router;
