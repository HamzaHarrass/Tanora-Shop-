const multer = require('multer');
const Produit = require("../Models/Produit");

const createProduit = async (req, res) => {
  try {
    console.log(req.body);
    const { name, size, prix, category, color } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image.' });
    }

    const image = req.file.filename;

    if (!name || !size || !prix || !image || !category || !color) {
      return res.status(400).json({ message: 'All fields (name, size, prix, image, category, color) are required.' });
    }

    const newProduit = new Produit({
      name,
      size,
      prix,
      image,
      category,
      color,
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
    const { name, size, prix, category, color } = req.body;
    const { id } = req.params;

    const image = req.file?.filename;
    if (!name || !size || !prix || !category || !color) {
      return res.status(400).json({ message: 'All fields (name, size, prix, image, category, color) are required.' });
    }
    const newData = { name, size, prix, category, color };

    if (image) {
      newData.image = image;
    }
    const updatedProduit = await Produit.findByIdAndUpdate(
      id,
      newData,
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

const ProduitCount = async (req, res) => {
  try {
    const produitCount = await Produit.countDocuments();
    res.status(200).json({ produitCount }); 
  } catch (error) {
    console.error('Error getting produit count', error);
    res.status(500).json({ message: 'Error counting produits' });
  }
};

module.exports = { createProduit, getAllProduits, updateProduit, deleteProduit, ProduitCount };
