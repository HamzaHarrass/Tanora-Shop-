const express = require('express');
const router = express.Router();
const produitController = require('../Controllers/ProduitController');
const { verifyToken } = require('../Middleware/auth');

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); 
  } else {
    res.status(403).json({ message: 'Permission denied. Only admin users have access.' });
  }
};

router.post('/create', verifyToken,isAdmin, produitController.createProduit);
router.get('/', produitController.getAllProduits);
router.put('/update/:id', produitController.updateProduit);
router.delete('/delete/:id', produitController.deleteProduit);

module.exports = router;
