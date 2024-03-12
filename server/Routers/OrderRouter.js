const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/OrderController');
const { verifyToken} = require('../Middleware/auth');


router.post('/confirm',verifyToken, OrderController.confirmOrder);

router.get('/', verifyToken, OrderController.getOrder);

module.exports = router;
