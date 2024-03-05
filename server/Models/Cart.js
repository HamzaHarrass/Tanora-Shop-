const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  produit: {
    type: Schema.Types.ObjectId,
    ref: 'Produit',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
