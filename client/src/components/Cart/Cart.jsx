import React from 'react';
import { FaTimes, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = ({ cart, removeFromCart, toggleCart, confirmOrder, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/3 bg-white p-4 shadow-lg z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Panier</h2>
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleCart}
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.produitId} className="flex justify-between items-center mb-4">
              <div>
                <p>{item.name}</p>
                <p>Quantité: {item.quantity}</p>
                <p>Prix: ${item.prix}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => decreaseQuantity(item.produitId)}
                >
                  <FaMinus />
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mx-2"
                  onClick={() => increaseQuantity(item.produitId)}
                >
                  <FaPlus />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => removeFromCart(item.produitId)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          <p className="text-lg font-bold">
            Total: $
            {cart.reduce((total, item) => total + item.prix * item.quantity, 0)}
          </p>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center"
            onClick={confirmOrder}
          >
            <FaShoppingCart className="mr-2" />
            Confirmer la commande
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
