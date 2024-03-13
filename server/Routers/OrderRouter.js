const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/OrderController');
const { verifyToken ,isAdmin } = require('../Middleware/auth');


router.post('/confirm',verifyToken, OrderController.confirmOrder);

router.get('/', verifyToken, OrderController.getOrder);

router.get('/all' ,  verifyToken, isAdmin, OrderController.allOrder)

router.patch('/:id' , verifyToken, isAdmin, OrderController.updateOrder);
module.exports = router;
