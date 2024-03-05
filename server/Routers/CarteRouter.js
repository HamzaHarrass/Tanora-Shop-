const express = require('express');
const router = express.Router();
const CartController = require('../Controllers/CartController');

router.post('/add-to-cart', CartController.addToCart);

module.exports = router;
