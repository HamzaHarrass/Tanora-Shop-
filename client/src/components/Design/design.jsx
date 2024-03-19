import React, { useState } from "react";
import Item from "../Item/Item";
import AddDesign from "../AddDesign/AddDesign";
import AddText from "../AddText/AddText";
import Done from "../Done/Done";
import { useNavigate } from "react-router-dom";
import sweatshirtblack from '../../assets/image/hanes-p360-black.jpg';
import sweatshirtwhite from '../../assets/image/front.png';
import sweatshirtwhite1 from '../../assets/image/25-1000-1400.png';

function design() {
    const [imageUploaded, setImageUploaded] = useState(false);
    const navigate = useNavigate();
    const [activePage, setActive] = useState('Item');
    const [selectedColor, setSelectedColor] = useState('white'); 
    const goBack = () => {
      navigate("/")
    };
  return (
    <div className="h-[100vh] flex flex-col gap-8">
      <div className="flex px-5 py-2 gap-4">
        <button onClick={goBack} className="p-2 text-lg">back</button> <h3 className="flex-1 text-center text-xl font-semibold">Need help desgining your items? Contact us!</h3>
      </div>
      <section className="flex-1 px-10 flex gap-10">
        <div className="flex flex-col gap-4 w-max">
            <button onClick={()=>setActive('Item')} className="py-6 flex flex-col items-center gap-4 shadow-lg bg-white hover:bg-gray-100">
                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="65" width="65" xmlns="http://www.w3.org/2000/svg"><path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path></svg>
                <span className="text-2xl font-bold">Item</span>
            </button>
            <button onClick={()=>setActive('AddDesign')} className="py-6 flex flex-col items-center gap-4 shadow-lg bg-white hover:bg-gray-100">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="65" width="65" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"></path></svg>
                <span className="text-2xl font-bold">Add design</span>
            </button>
            <button onClick={()=>setActive('AddText')} className="py-6 flex flex-col items-center gap-4 shadow-lg bg-white hover:bg-gray-100">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="65" width="65" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></svg>
                <span className="text-2xl font-bold">Add Text</span>
            </button>
            <button onClick={()=>setActive('Done')} className="py-6 flex flex-col items-center gap-4 shadow-lg bg-white hover:bg-gray-100">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="65" width="65" xmlns="http://www.w3.org/2000/svg"><path d="M454.66 169.4A31.86 31.86 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.78 31.78 0 00-9.34-22.6zM320 336h-48v48a16 16 0 01-32 0v-48h-48a16 16 0 010-32h48v-48a16 16 0 0132 0v48h48a16 16 0 010 32zm16-176H176v-16a80 80 0 01160 0z"></path></svg>
                <span className="text-2xl font-bold">Add to cart</span>
            </button>
        </div>
        <div className="flex-1 flex flex-col gap-2">
            {activePage == 'Item' && <Item setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>}
            {activePage == 'AddDesign' && <AddDesign setImageUploaded={setImageUploaded} imageUploaded={imageUploaded}/>}
            {activePage == 'AddText' && <AddText/>}
            {activePage == 'Done' && <Done setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>}
        </div>
        <div>
            <div className="shadow-lg p-5 rounded-2xl flex justify-center"> 
            {selectedColor === 'white' && <img className="h-32" src={sweatshirtwhite} alt="sweatshirt blanc" />}
            {selectedColor === 'white' && <img className="h-32" src={sweatshirtwhite1} alt="sweatshirt blanc" />}
            {selectedColor === 'black' && <img className="h-32" src={sweatshirtblack} alt="sweatshirt noir" />}
            </div>
            <div className="shadow-lg p-5 rounded-2xl flex flex-col gap-2">
                <button className="flex justify-center py-4 hover:bg-gray-200">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </button>
                <div className="flex gap-2">
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m5.005 15.995 4-4-4-4v3h-3v2h3zm14-5v-3l-4 4 4 4v-3h3v-2h-2.072zm-8 7h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2z"></path></svg>
                    </button>
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M13 5V2h-2v3H8l4 4 4-4zm0 17v-3h3l-4-4-4 4h3v3zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"></path></svg>             
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path></svg>             
                    </button>
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path></svg>              
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="rotate-90" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path></svg>
                    </button>
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="-rotate-90" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path></svg>
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M18 7C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H15V19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H15V7H18Z" fill="currentColor" fillOpacity="0.5"></path><path d="M13 3H11V21H13V3Z" fill="currentColor"></path><path d="M5 8C5 7.44772 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z" fill="currentColor"></path></svg>       
                    </button>
                    <button className="hover:bg-gray-200">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M17 18C17 18.5523 16.5523 19 16 19L8 19C7.44772 19 7 18.5523 7 18L7 15L5 15L5 18C5 19.6569 6.34315 21 8 21L16 21C17.6569 21 19 19.6569 19 18V15L17 15V18Z" fill="currentColor" fillOpacity="0.5"></path><path d="M16 5C16.5523 5 17 5.44772 17 6V9H19V6C19 4.34315 17.6569 3 16 3L8 3C6.34315 3 5 4.34315 5 6V9H7V6C7 5.44772 7.44772 5 8 5L16 5Z" fill="currentColor"></path><path d="M21 13V11L3 11V13H21Z" fill="currentColor"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="relative">
        {imageUploaded && <img src={imageUploaded} alt="Uploaded Design" className="absolute h-48" style={{top: '250px' , left :'50%', transform: 'translate(-50%,-50%)'}} />}
          {selectedColor === 'white' && <img className="w-96" src={sweatshirtwhite} alt="sweatshirt blanc" />}
          {selectedColor === 'black' && <img className="w-96" src={sweatshirtblack} alt="sweatshirt noir" />}
        </div>
      </section>
    </div>
  )
}

export default design