import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/image/1e2f5cd0-2280-4816-ac4d-ffcbeabeb8c9.png';
import logocomplet from '../../assets/image/be9fbf92-c05c-4103-a74f-9505fe9830cc.png';
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
   <nav className="py-2.5 mt-5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="mochtara Logo"/>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>
            <div className="flex grid-cols-2 gap-5">
              <button href="#" className="">
                
              <div className="relative" onClick={toggleCart}>
            <FaShoppingCart className="text-black text-2xl cursor-pointer" />
            <span className="absolute left-5 bg-red-500 text-white rounded-full px-1 py-0 text-sm">
              {cart.length}
            </span>
          </div>
              </button>
              <Link to={`/auth/register`} href="https://themesberg.com/product/tailwind-css/landing-page"
                className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-purple-800">
                sign-up
              </Link>
              <button data-collapse-toggle="mobile-menu-2" type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2" aria-expanded="true">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
              <Link to={`/`} href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page">Home</Link>
              </li>
              <li>
                <Link to={`/allproduit`} href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 text-base rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">
                    Shop
                </Link>
              </li>
              <li>
                <Link to={'/design'} href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Design</Link>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
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
      <div className="container mx-auto py-8 ">
      <h2 className="flex flex-row flex-nowrap items-center mt-10 mb-4">
          <span className="text-2xl font-bold border-b-2 border-zinc-800 pb-2.5 ml-4">All Products</span>
        </h2>
      <div className="  wrapper antialiased text-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      </div>
      ))}
        </div>
      </div>
      
      <footer className="mt-20">
    <div className="py-4 text-black">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 xl:w-1/5">
            <img src={logocomplet} alt="logo" className="w-48"/>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4">Company</h2>
            </div>
            <ul className="leading-8 ">
              <li><a href="#" className="text-black">Home</a></li>
              <li><a href="#" className="text-black">Shop</a></li>
              <li><a href="#" className="text-black">Design</a></li>
              <li><a href="#" className="text-black">Contact </a></li>
            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 ">Categories</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="text-black flex justify-between gap-2"><span>T-shirts</span> <span>تيشيرت</span></a></li>
              <li><a href="#" className="text-black flex justify-between gap-2"><span>Hoodies</span> <span>هوديي</span></a></li>
              <li><a href="#" className="text-black flex justify-between gap-2"><span>Sweatshirts</span> <span>تيشيرت بالأكمام</span></a></li>

            </ul>
          </div>
          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4  ">Connect Us</h2>
            </div>
            <a href="#"
              className="inline-flex items-center text-black justify-center h-12 w-12 border border-gray-100 rounded-full mr-1 hover:text-black hover:border-black">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                </path>
              </svg>
            </a>
           
            <a href="#"
              className="inline-flex items-center text-black justify-center h-12 w-12 border border-gray-100 rounded-full mr-1 hover:text-black hover:border-black">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg>
            </a>
            <a href="#"
              className="inline-flex items-center text-black justify-center h-12 w-12 border border-gray-100 rounded-full mr-1 hover:text-black hover:border-black">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                </path>
              </svg>
            </a>
            <p className="text-base italic mt-4"><a href="#" className="text-black">TanoraShop@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className=" py-4 text-black">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full  sm:w-auto sm:text-left">
            Copyright © 2024
            Tanora Shop. All Rights Reserved.
          </div>

        </div>
      </div>
    </div>
  </footer>
    </div>
  );
};

export default AllProduit;
