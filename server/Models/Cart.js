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
    status: {
      type: String,
      enum: ['pending', 'completed', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending' 
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  