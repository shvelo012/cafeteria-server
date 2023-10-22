const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// GET /admin/getcredentials
router.get('/getcredentials', adminController.getCredentials);

// POST /admin/setIsOpen
router.post('/setIsOpen', adminController.setIsOpen);

//GET /admin/getIsOpen
router.get('/getIsOpen', adminController.getIsOpen);

module.exports = router;
