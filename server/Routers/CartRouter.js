const express = require('express');
const cartController = require('../Controllers/CartController');
const { verifyToken} = require('../Middleware/auth');

const router = express.Router();

router.post('/', verifyToken, cartController.createCart);
router.patch('/crease',verifyToken, cartController.creaseQuantity)
router.get('/', verifyToken, cartController.getCart);
router.delete('/:produitId', verifyToken, cartController.deleteCart);

module.exports = router;