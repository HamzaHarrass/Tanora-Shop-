const Produit = require("../Models/Produit")

const createProduit = async (req, res) => {
    try {
      // Check if the user has 'admin' role
    //   if (req.user.role !== 'admin') {
    //     return res.status(403).json({ message: 'Permission denied. Only admin can create products.' });
    //   }
  
      const { name, size, prix, image } = req.body;
  
      // Data validation
      if (!name || !size || !prix || !image) {
        return res.status(400).json({ message: 'All fields (name, size, prix, image) are required.' });
      }
  
      const newProduit = new Produit({
        name,
        size,
        prix,
        image,
      });
  
      await newProduit.save();
  
      res.status(201).json({ message: 'Product created successfully', produit: newProduit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  module.exports = { createProduit };