import React, { useEffect, useState } from 'react';  
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/image/1e2f5cd0-2280-4816-ac4d-ffcbeabeb8c9.png';
import Cookies from "js-cookie";

function Navbar({showCart, setShowCart, cart}) {
  const isAuthenticated = !!Cookies.get("token"); 

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    navigate('/auth/login')

  };
  useEffect (()=>{console.log(cart);},[cart])

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
              {isAuthenticated &&  (
                <button href="#" className="">
                  <div className="relative" onClick={toggleCart}>
                    <FaShoppingCart className="text-black text-2xl cursor-pointer" />
                    {cart && <span className="absolute left-5 bg-red-500 text-white rounded-full px-1 py-0 text-sm">
                      {cart.length}
                    </span>}
                  </div>
                </button>
              )}
              <div>
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-purple-800">
                    Logout
                  </button>
                ) : (
                  <Link to={`/auth/register`} href="https://themesberg.com/product/tailwind-css/landing-page" className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-purple-800">
                    Sign-up
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to={`/`} href="#" className="block py-2 pl-3 pr-4 text-black bg-purple-700 text-base rounded lg:bg-transparent  lg:p-0 dark:text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/produit`} href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={`/design`} className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Design
                </Link>
              </li>
              <li>
                <Link to={`/order`} className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
