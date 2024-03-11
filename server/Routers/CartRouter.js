const express = require('express');
const cartController = require('../Controllers/CartController');
const { verifyToken} = require('../Middleware/auth');

const router = express.Router();

router.post('/',verifyToken, cartController.createCart);

router.get('/:userId', cartController.getCart);

router.put('/:userId/:cartId', cartController.updateCart);

router.delete('/:userId/:cartId', cartController.deleteCart);

module.exports = router;