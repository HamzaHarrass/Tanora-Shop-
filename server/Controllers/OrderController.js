const Order = require('../Models/Order');
const Cart = require('../Models/Cart');
const User = require('../Models/User');

const confirmOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    let cart = await Cart.findOne({ user: userId });

    if (!cart || cart.produits.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const order = new Order({ user: userId , produits:cart.produits });
    await order.save();
    cart.produits = [];
    cart = await cart.save();

    res.status(201).json({ message: 'Order confirmed successfully', order ,cart});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrder = async (req, res) => {
    try {
      const userId = req.user.userId;
      const orders = await Order.find({ user: userId }).populate('produits.produit');
  
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const allOrder = async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('produits.produit');
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateOrder = async (req, res) => {
    try {
      const orderId = req.params.id;
      const { status } = req.body;
  
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      order.status = status;
      await order.save();
  
      res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { confirmOrder , getOrder , allOrder , updateOrder };
