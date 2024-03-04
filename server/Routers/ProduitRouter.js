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

// Configuration de Multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage }).single('image');

// Router
router.post('/create', verifyToken, isAdmin, upload , produitController.createProduit);
router.get('/', produitController.getAllProduits);
router.put('/update/:id', produitController.updateProduit);
router.delete('/delete/:id', produitController.deleteProduit);
router.post('/uploads',upload,(req , res) => {
  const { file } = req ; 
  res.send({
    file: file.originalname,
    path: file.path,
  })
})
module.exports = router;
