const Cart = require('../Models/Cart');

const createCart = async (req, res) => {
  try {
    const { userId, produitId, quantity } = req.body;
    const newCart = await Cart.create({ user:userId, produit:produitId, quantity });
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId }).populate('produit');
    if (!cart) {
      return res.status(404).json({ error: 'Panier non trouvé' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { userId, cartId } = req.params;
    const { quantity, status } = req.body;
    const updatedCart = await Cart.findOneAndUpdate(
      { user: userId, _id: cartId },
      { quantity, status },
      { new: true }
    ).populate('produit');
    if (!updatedCart) {
      return res.status(404).json({ error: 'Panier non trouvé' });
    }
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { userId, cartId } = req.params;
    const deletedCart = await Cart.findOneAndDelete({ user: userId, _id: cartId });
    if (!deletedCart) {
      return res.status(404).json({ error: 'Panier non trouvé' });
    }
    res.status(200).json({ message: 'Panier supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
};