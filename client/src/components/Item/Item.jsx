import React from "react";
import Editor from "../Editor/Editor";

function Item({ selectedColor, setSelectedColor }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-center">
        Configure your item, its color, size, decoration, and quantity.
      </h3>
      <Editor setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
    </>
  );
}

export default Item;
