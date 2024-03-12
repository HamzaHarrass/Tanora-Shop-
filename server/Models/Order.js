const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cart = require('./Cart');

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  produits: [{
    produit:{
      type: Schema.Types.ObjectId,
      ref: 'Produit',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1 
    },
    
  }],
  status: {
    type: String,
    enum: ['pending', 'completed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
