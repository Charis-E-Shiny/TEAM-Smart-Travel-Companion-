// backend/routes/api.js
const express = require('express');
const router = express.Router();
const cuisineController = require('../controllers/cuisineController');

router.get('/cuisines', cuisineController.getAllCuisines);

module.exports = router;
