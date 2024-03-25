import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import Cart from '../Cart/Cart';

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
        if (error.response && error.response.status === 404) {
          console.log("User's cart not found.");
          setCart([]); // Set an empty cart array if not found
        } else {
          console.error("Error fetching user's cart:", error.response);
        }
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
      console.log(response.data);
  
      setCart(response.data.produits);
      console.log(cart);
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
        console.log("hey ", response);
        setCart(response.data.produits);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const removeFromCart = async (item) => {
    const produitId = item.produit._id;
    console.log(produitId);
    try {
      const response = await axios.delete(`http://localhost:3000/carts/${produitId}`);
      console.log(response);
      setCart(response.data.produits);
    } catch (error) {
      console.error(error);
    }
  };
  
  const confirmOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3000/orders/confirm');
      console.log(response.data);
      setCart(response.data.cart.produits);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <Navbar showCart={showCart} cart={cart}  setShowCart={setShowCart}/>
      {showCart && (
        <Cart
          cart={cart}
          toggleCart={toggleCart}
          creaseQuantity={creaseQuantity}
          removeFromCart={removeFromCart}
          confirmOrder={confirmOrder}
        />
      )}
      <div className="container mx-auto py-8 ">
        <h2 className="flex flex-row flex-nowrap items-center mt-10 mb-4">
          <span className="text-2xl font-bold border-b-2 border-zinc-800 pb-2.5 ml-4">All Products</span>
        </h2>
        <div className="wrapper antialiased text-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {produits.map((produit) => (
            <div key={produit._id} className="mt-10">
              <img src={`http://localhost:3000/uploads/${produit.image}`} alt={produit.name} className="w-80 object-cover object-center rounded-lg shadow-md  "/>    
              
              <div className="relative px-4 -mt-16 w-100 ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-baseline">
                    <span className="bg-green-200 text-green-800 text-xs px-3 py-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
                      New
                    </span>
                  </div>
                  
                  <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{produit.name}</h4>
              
                  <div className="mt-1">
                    {produit.prix}
                    <span className="text-gray-600 text-sm">   DH</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-pink-300 text-xl font-semibold">{produit.size} </span>
                    <span className="text-md text-gray-600">{produit.color}</span>
                  </div> 
                  <div className="flex items-center mt-4">
                    {cart.findIndex(item => item.produit._id === produit._id) === -1 ? (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => addToCart(produit)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <p className='text-green-500 bg-green-200 rounded p-1'> In cart</p>
                    )}
                  </div> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default AllProduit;