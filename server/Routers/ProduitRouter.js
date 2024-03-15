const express = require('express');
const router = express.Router();
const produitController = require('../Controllers/ProduitController');
const { verifyToken ,isAdmin } = require('../Middleware/auth');
const multer = require('multer'); 




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
router.put('/update/:id',verifyToken, isAdmin, upload , produitController.updateProduit);
router.delete('/delete/:id',verifyToken , isAdmin, produitController.deleteProduit);
router.post('/uploads',upload,(req , res) => {
  const { file } = req ; 
  res.send({
    file: file.originalname,
    path: file.path,
  })
})
module.exports = router;
