const Order = require('../Models/Order');
const Cart = require('../Models/Cart');

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
      const orders = await Order.find().populate('produits.produit');
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { confirmOrder , getOrder , allOrder };
