const express = require('express');
const router = express.Router();
const produitController = require('../Controllers/ProduitController');
const { verifyToken } = require('../Middleware/auth');

const multer = require('multer'); 
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); 
  } else {
    res.status(403).json({ message: 'Permission denied. Only admin users have access.' });
  }
};


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

router.post('/create', verifyToken, isAdmin, upload.single('image'), produitController.createProduit);
router.get('/', produitController.getAllProduits);
router.put('/update/:id', produitController.updateProduit);
router.delete('/delete/:id', produitController.deleteProduit);

module.exports = router;
