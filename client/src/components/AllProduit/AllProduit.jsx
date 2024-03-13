import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart/cart';

const AllProduit = () => {
  const [produits, setProduits] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get('http://localhost:3000/produits/');
        setProduits(response.data.produits);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/carts`, {});
        setCart(response.data.produits);
      } catch (error) {
        console.error("Error fetching user's cart:", error.response); // Log error response
      }
    };

    fetchProduits();
    fetchUserCart();
  }, []);

  const addToCart = async (produit) => {
    try {
      const { _id: produitId, prix, name, size, image } = produit;
      const quantity = 1;

      const response = await axios.post('http://localhost:3000/carts/', {
        produitId,
        quantity,
      });
      console.log(response.data)

      setCart(response.data.produits);
      console.log(cart)
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const creaseQuantity = async (item, action) => {
    try {
      const produitId = item.produit._id;
      if (produitId) {
        const response = await axios.patch(`http://localhost:3000/carts/crease`, {
          produitId,
          action,
        });
          console.log("hey " ,response);
        setCart(response.data.produits
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const removeFromCart = async (item) => {
    const produitId = item.produit._id;
    console.log(produitId)
    try {
      const response = await axios.delete(`http://localhost:3000/carts/${produitId}`);
      console.log(response)
      setCart(response.data.produits
      );
      
    } catch (error) {
      console.error(error);
    }
  };

  const confirmOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3000/orders/confirm');
      console.log(response.data);
      setCart(response.data.cart.produits)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold">My Shop</h1>
          <div className="relative" onClick={toggleCart}>
            <FaShoppingCart className="text-white text-2xl cursor-pointer" />
            <span className="absolute left-5 bg-red-500 text-white rounded-full px-1 py-0 text-sm">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
      {showCart && (
        <Cart
          cart={cart}
          toggleCart={toggleCart}
          creaseQuantity={creaseQuantity}
          removeFromCart={removeFromCart}
          confirmOrder={confirmOrder}
        />
      )}
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
                <div className="flex items-center mt-4">
                 {cart.findIndex(item => item.produit._id == produit._id) == -1 ? <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => addToCart(produit)}
                  >
                    Add to Cart
                  </button>
                    : <p className='text-green-500 bg-green-200 rounded p-1'> In cart</p>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduit;
