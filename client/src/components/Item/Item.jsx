import React from "react";
import Editor from "../Editor/Editor";

function Item({ selectedColor, setSelectedColor,colorOpen, setColorOpen , sizeOpen, setSizeOpen,decorationOpen, setDecorationOpen ,quantity, setQuantity }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-center">
        Configure your item, its color, size, decoration, and quantity.
      </h3>
      <Editor setSelectedColor={setSelectedColor} selectedColor={selectedColor} 
      colorOpen={colorOpen}
      setColorOpen={setColorOpen}
      sizeOpen={sizeOpen}
      setSizeOpen={setSizeOpen}
      decorationOpen={decorationOpen}
      setDecorationOpen={setDecorationOpen}
      quantity={quantity}
      setQuantity={setQuantity} />
      
    </>
  );
}

export default Item;
