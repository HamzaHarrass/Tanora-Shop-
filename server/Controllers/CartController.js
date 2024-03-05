const Cart = require("../Models/Cart");
const Produit = require("../Models/Produit");

const addToCart = async (req, res) => {
  try {
    const { produitId, quantity } = req.body;

    if (!produitId || !quantity) {
      return res.status(400).json({ message: 'Both produitId and quantity are required.' });
    }

    const produit = await Produit.findById(produitId);
    if (!produit) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    let cartItem = await Cart.findOne({ produit: produitId });
    if (cartItem) {
      cartItem.quantity += parseInt(quantity);
    } else {
      cartItem = new Cart({
        produit: produitId,
        quantity: parseInt(quantity)
      });
    }

    await cartItem.save();

    res.status(200).json({ message: 'Product added to cart successfully', cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addToCart };
