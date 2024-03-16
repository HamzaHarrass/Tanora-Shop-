import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from '../../assets/image/1e2f5cd0-2280-4816-ac4d-ffcbeabeb8c9.png';
import tshort from '../../assets/image/tshort.png';
import tshort1 from '../../assets/image/tshort1.png';
import womanImage from '../../assets/image/woman.jpg';
import manImage from '../../assets/image/man.jpg';
import watchImage from '../../assets/image/watch.jpg';
import kidsImage from '../../assets/image/kid.jpg';
import sportsImage from '../../assets/image/sports.jpg';
import sunglassImage from '../../assets/image/sunglass.jpg';
import banner from '../../assets/image/banner.jpg';

const Index = () => {
  return (
    <>
      <nav className="bg-gray-100 border-gray-200 py-2.5 dark:bg-gray-900">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
              <a href="https://themesberg.com/product/tailwind-css/landing-page"
                className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-purple-800">
                sign-up
              </a>
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
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 text-base rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page">Home</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Design</a>
              </li>
              <li>
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="px-3 py-5 bg-neutral-100 lg:py-10 mt-20">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-2 ">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-black">25% OFF</p>
            <p className="text-4xl font-bold md:text-7xl text-black">Awesome Designs</p>
            <p className="text-4xl font-bold md:text-7xl text-black">For You</p>
            <button className="text-base md:text-base italic bg-black text-white py-2 px-5 mt-20 hover:bg-zinc-800 rounded-lg">Shop Now</button>
          </div>
          <div className="order-1 lg:order-2 flex gap-5">
            <div>
              <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-lg " src={tshort} alt=""/>
            </div>
            <div>
              <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-lg " src={tshort1} alt=""/>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
          <img src={banner} alt="Backpack" className="ml-40  rounded-lg shadow-lg" />
            {/* <div className="relative">
              <div className=" w-50 bg-white p-3 rounded-lg shadow-lg bg-yellow-400 text-center">
                <h2 className="text-3xl font-bold mb-2">GET 25% OFF</h2>
                <p className="text-xl">ON SELECTED ITEMS</p>
                <p className="text-lg">BACKPACK COLLECTION</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                >
                  Go To Collection
                </a>
              </div>
            </div> */}
          </div>
          <div className="mr-40 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Flash Sale</h2>
            <div className="flex items-center mb-4">
              <img src={tshort} alt="Sunglass" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-lg font-bold">Wayfarer Sungl...</h3>
                <p className="text-gray-600">Our optical engineer...</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">$20.00</span>
                  <span className="text-gray-500 line-through">$25.00</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-gray-600 mr-2">Sold:</span>
              <span className="font-bold mr-4">120</span>
              <span className="text-gray-600 mr-2">Available:</span>
              <span className="font-bold">147</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="flex flex-row flex-nowrap items-center mt-10 mb-4">
          <span className="text-2xl font-bold border-b-2 border-zinc-800 pb-2.5">New Collection</span>
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="relative">
            <img src={womanImage} alt="Woman" className="w-100 h-100 rounded-full object-cover p-2"/>
            <span className="absolute  left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">Woman</span>
          </div>
          <div className="relative">
            <img src={manImage} alt="Man" className="w-100 h-100 rounded-full object-cover p-2"/>
            <span className="absolute  left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">Man</span>
          </div>
          <div className="relative">
            <img src={watchImage} alt="Watch" className="w-100 h-100 rounded-full object-cover p-2"/>
            <span className="absolute  left-1/2 transform -translate-x-1/2 bg-blue-300 text-gray-800 px-2 py-1 rounded-full text-sm">Watch</span>
          </div>
          <div className="relative">
            <img src={kidsImage} alt="Kids" className="w-100 h-100 rounded-full object-cover p-2"/>
            <span className="absolute  left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">Kids</span>
          </div>
          <div className="relative">
            <img src={sportsImage} alt="Sports" className="w-100 h-100 rounded-full object-cover p-2"/>
            <span className="absolute  left-1/2 transform -translate-x-1/2 bg-blue-400 text-white px-2 py-1 rounded-full text-sm">Sports</span>
          </div>
          <div className="relative">
            <img src={sunglassImage} alt="Sunglass" className="w-100 h-100 rounded-full object-cover p-2"/>
            <span className="absolute  left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm">Sunglass</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
