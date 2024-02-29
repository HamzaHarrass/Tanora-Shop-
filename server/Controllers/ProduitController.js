const Produit = require("../Models/Produit")

const createProduit = async (req, res) => {
    try {

      const { name, size, prix, image } = req.body;
  
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

  const getAllProduits = async (req, res) => {
    try {
      const produits = await Produit.find();
      res.status(200).json({ produits });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const updateProduit = async (req, res) => {
    try {  
      const { name, size, prix, image } = req.body;
      const { id } = req.params;
  
      if (!name || !size || !prix || !image) {
        return res.status(400).json({ message: 'All fields (name, size, prix, image) are required.' });
      }
  
      const updatedProduit = await Produit.findByIdAndUpdate(
        id,
        { name, size, prix, image },
        { new: true }
      );
  
      if (!updatedProduit) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product updated successfully', produit: updatedProduit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const deleteProduit = async (req, res) => {
    try {
        
      const { id } = req.params;
  
      const deletedProduit = await Produit.findByIdAndDelete(id);
  
      if (!deletedProduit) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully', produit: deletedProduit });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  module.exports = { createProduit , getAllProduits , updateProduit , deleteProduit };