// Cart.jsx
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/3 bg-white p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.produitId} className="flex justify-between items-center mb-4">
              <div>
                <p>{item.name}</p>
                <p>Quantité: {item.quantity}</p>
                <p>Prix: ${item.prix * item.quantity}</p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => removeFromCart(item.produitId)}
              >
                Supprimer
              </button>
            </div>
          ))}
          <p className="text-lg font-bold">
            Total: $
            {cart.reduce((total, item) => total + item.prix * item.quantity, 0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;