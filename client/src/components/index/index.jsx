import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import logo from '../../assets/image/1e2f5cd0-2280-4816-ac4d-ffcbeabeb8c9.png';
import logocomplet from '../../assets/image/be9fbf92-c05c-4103-a74f-9505fe9830cc.png';
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
      <nav className="  py-2.5 ">
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
                <a href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 text-base rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page">Home</a>
              </li>
              <li>
                <Link to={`/allproduit`} href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b text-base border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Shop
                </Link>
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
              <img src={tshort} alt="Sunglass" className="w-30 h-40 mr-4" />
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
              <span className="text-gray-600 ml-40">Available:</span>
              <span className="font-bold ml-2">147</span>
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
      <section className="mt-20"> 
      <div className="grid grid-cols-3 gap-4 ">

          <div className="bg-white rounded-lg shadow-md md:flex h-40 overflow-hidden ml-5 ">
            <img src={tshort} alt="Armani Veni Vidi Vici" className="md:w-1/3"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Armani Veni Vidi Vici</h3>
              <p className="text-gray-600">Fendi began life in 1925 ...</p>
              <p className="text-xl font-bold">$17.99 <span className="text-gray-500 line-through">$20.00</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md md:flex h-40 overflow-hidden ml-5 ">
            <img src={tshort} alt="Adidas Shoes Black" className="md:w-1/3"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Adidas Shoes Black</h3>
              <p className="text-gray-600">Men Black top shoes gown</p>
              <p className="text-xl font-bold">$45.00 <span className="text-gray-500 line-through">$99.99</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md md:flex h-40 overflow-hidden ml-5 ">
            <img src={tshort} alt="Gucci Carlton UK" className="md:w-1/3"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Gucci Carlton UK</h3>
              <p className="text-gray-600">Knitted midi A-line dress....</p>
              <p className="text-xl font-bold">$14.99 <span className="text-gray-500 line-through">$19.99</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md md:flex h-40 overflow-hidden ml-5 ">
            <img src={tshort} alt="Scuba Stand Collar T..." className="md:w-1/3"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Scuba Stand Collar T...</h3>
              <p className="text-gray-600">Zara provides only the hi...</p>
              <p className="text-xl font-bold">$12.00 <span className="text-gray-500 line-through">$16.00</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md md:flex h-40 overflow-hidden ml-5 ">
            <img src={tshort} alt="Regular Fit Crew-nec..." className="md:w-1/3"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Regular Fit Crew-nec...</h3>
              <p className="text-gray-600">Self-striped knitted midi ...</p>
              <p className="text-xl font-bold">$12.30 <span className="text-gray-500 line-through">$16.38</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md md:flex h-40 overflow-hidden ml-5 ">
            <img src={tshort} alt="Hermes Carlton Lon..." className="md:w-1/3"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Hermes Carlton Lon...</h3>
              <p className="text-gray-600">Off-White self-striped kni...</p>
              <p className="text-xl font-bold">$15.00</p>
            </div>
          </div>

        </div>
      </section>

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
    </>
  );
};

export default Index;
