import React from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = ({
  cart,
  toggleCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/3 bg-white p-4 shadow-lg z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleCart}
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
  {cart.map((item) => (
  <div key={item.produit._id} className="flex justify-between items-center mb-4">
    <div>
      <p className="text-lg font-bold">{item.produit.name}</p>
      <p className="text-gray-600">Quantity: {item.quantity}</p>
      <p className="text-gray-600">Price: ${item.produit.prix}</p>
    </div>
    <div className="flex items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => decreaseQuantity(item)}
      >
        <FaMinus />
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mx-2"
        onClick={() => increaseQuantity(item)}
      >
        <FaPlus />
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => removeFromCart(item.produit._id)}
      >
        Remove
      </button>
    </div>
  </div>
))}

          <p className="text-lg font-bold">
            Total: ${cart.reduce((total, item) => total + item.produit.prix * item.quantity, 0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
