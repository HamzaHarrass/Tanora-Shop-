import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';

const AllProduit = () => {
  const [produits, setProduits] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://localhost:3000/produits/');
        setProduits(response.data.produits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduits();
  }, []);

  const addToCart = (produit) => {
    setCart([...cart, produit]);
  };

  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold">My Shop</h1>
          <div className="relative">
            <FaShoppingCart className="text-white text-2xl" />
            <span className="absolute  left-5 bg-red-500 text-white rounded-full px-1 py-0 text-sm">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produits.map((produit) => (
            <div key={produit._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`http://localhost:3000/uploads/${produit.image}`}
                alt={produit.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{produit.name}</h2>
                <p className="text-gray-600 mb-2">Size: {produit.size}</p>
                <p className="text-gray-600 font-bold">Price: ${produit.prix}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => addToCart(produit)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduit;