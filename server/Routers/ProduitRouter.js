const express = require('express');
const router = express.Router();
const produitController = require('../Controllers/ProduitController');

// Middleware to check if the user has 'admin' role
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); 
  } else {
    res.status(403).json({ message: 'Permission denied. Only admin users have access.' });
  }
};

// Routes for products
router.post('/create', isAdmin , produitController.createProduit);
router.get('/', isAdmin , produitController.getAllProduits);
router.put('/update/:id', isAdmin, produitController.updateProduit);

module.exports = router;
