import React from "react";
import sweatshirtblack from '../../assets/image/hanes-p360-black.jpg';
import sweatshirtwhite from '../../assets/image/front.png';

function Done({ selectedColor, setSelectedColor }) {
  return (
    <>
        <h3 className="text-2xl font-bold text-center my-2">Your current designed items
        </h3>
        <div className="flex p-3 shadow rounded-lg">
            <div>
            {selectedColor === 'white' && <img className="h-28" src={sweatshirtwhite} alt="sweatshirt blanc" />}
          {selectedColor === 'black' && <img className="h-28" src={sweatshirtblack} alt="sweatshirt noir" />}
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-center"><span className="text-lg font-semibold">Testuisns</span></div>
                <div className="flex items-center justify-center gap-10 text-lg">
                    <p> Size : <span>S</span></p>
                    <p> Decoration : <span>embroidery</span></p>
                    <p> Unit price : <span>$500</span></p>
                    <p> Quantity : <span>2</span></p>
                </div>
                <div className="flex justify-end"><span className="text-2xl font-bold">$1000</span></div>
            </div>
        </div>
        <div className="py-5 flex items-center justify-between mt-auto border-t border-black">
            <p className="text-3xl font-bold ">$1000</p>
            <button className="text-white bg-gray-700">Add your desinged items to cart</button>
        </div>
    </>
  );
}

export default Done;
