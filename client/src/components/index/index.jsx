import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
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
    <Navbar/>
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
        <div className="flex justify-between gap-10">
          <div className="flex-1">
          <img src={banner} alt="Backpack" className="mx-20  rounded-lg shadow-lg" />
          </div>
          <div className="mx-20 bg-white p-8 rounded-lg shadow-lg">
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

      <section className="mt-6 flex flex-col items-center gap-6">
        <h2 className="flex flex-row flex-nowrap items-center mt-10 mb-4 text-center">
          <span className="text-2xl font-bold border-b-2 border-zinc-800 pb-2.5 ml-4">New Collection</span>
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
      <section className="m-20 p-20 pt-10 border-2 rounded-lg flex flex-col">

      <div class="bg-white">
        <div className='flex justify-between mb-4'>
          <h2 class="text-2xl font-bold mb-4">Flash Sale</h2>
          <span class="text-gray-500 text-lg">Time Over!</span>
      </div>
  
  <div class="grid grid-cols-4 gap-10">
    <div>
      <img src={tshort1} alt="Adidas Shoes Black" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Adidas Shoes Black</h3>
      <p class="text-gray-600">Men Black top sleeveless gown</p>
      <p class="text-lg font-bold">$45.00 <span class="text-gray-500 line-through">$99.99</span></p>
    </div>
    <div>
      <img src={tshort} alt="Armani Wide-Leg Trousers" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Armani Wide-Leg Trousers</h3>
      <p class="text-gray-600">Monochrome elegance. Made with a...</p>
      <p class="text-lg font-bold">$12.00 <span class="text-gray-500 line-through">$19.99</span></p>
    </div>
    <div>
      <img src={tshort1} alt="Zara Shoes Green" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Zara Shoes Green</h3>
      <p class="text-gray-600">Footwear refers to garments worn o...</p>
      <p class="text-lg font-bold">$50.00</p>
    </div>
    <div>
      <img src={tshort} alt="Wayfarer Sunglasses" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Wayfarer Sunglasses</h3>
      <p class="text-gray-600">Our optical engineers developed the...</p>
      <p class="text-lg font-bold">$15.00 <span class="text-gray-500 line-through">$18.99</span></p>
    </div>
    <div>
    <img src={tshort1} alt="Armani Wide-Leg Trousers" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Armani Wide-Leg Trousers</h3>
      <p class="text-gray-600">Monochrome elegance. Made with a...</p>
      <p class="text-lg font-bold">$12.00 <span class="text-gray-500 line-through">$19.99</span></p>
    </div>
    <div>
    <img src={tshort} alt="Armani Wide-Leg Trousers" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Armani Wide-Leg Trousers</h3>
      <p class="text-gray-600">Monochrome elegance. Made with a...</p>
      <p class="text-lg font-bold">$12.00 <span class="text-gray-500 line-through">$19.99</span></p>
    </div>
    <div>
    <img src={tshort1} alt="Armani Wide-Leg Trousers" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Armani Wide-Leg Trousers</h3>
      <p class="text-gray-600">Monochrome elegance. Made with a...</p>
      <p class="text-lg font-bold">$12.00 <span class="text-gray-500 line-through">$19.99</span></p>
    </div>
    <div>
    <img src={tshort} alt="Armani Wide-Leg Trousers" class="w-80 rounded-lg"/>
      <h3 class="text-lg font-semibold mt-2">Armani Wide-Leg Trousers</h3>
      <p class="text-gray-600">Monochrome elegance. Made with a...</p>
      <p class="text-lg font-bold">$12.00 <span class="text-gray-500 line-through">$19.99</span></p>
    </div>
  </div>
</div>
<Link to={`/allproduit`}  className='m-auto mt-10 p-2 hover:bg-blue-500 hover:text-white rounded-lg'>Show more</Link>
  </section>

    <Footer/>
    </>
  );
};

export default Index;
