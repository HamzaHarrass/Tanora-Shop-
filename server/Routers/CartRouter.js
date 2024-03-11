const express = require('express');
const cartController = require('../Controllers/CartController');
const { verifyToken} = require('../Middleware/auth');

const router = express.Router();

router.post('/', verifyToken, cartController.createCart);

router.get('/', verifyToken, cartController.getCart);

router.put('/:userId/:cartId', verifyToken, cartController.updateCart);

router.delete('/:userId/:cartId', verifyToken, cartController.deleteCart);

module.exports = router;