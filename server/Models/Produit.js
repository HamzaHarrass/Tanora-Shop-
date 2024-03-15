const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  category: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

const Produit = mongoose.model('Produit', ProduitSchema);

module.exports = Produit;
