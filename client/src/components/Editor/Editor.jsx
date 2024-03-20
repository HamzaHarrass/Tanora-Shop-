import React, { useState } from "react";

function Editor({ selectedColor, setSelectedColor,colorOpen, setColorOpen , sizeOpen, setSizeOpen,decorationOpen, setDecorationOpen ,quantity, setQuantity}) {

  const [sizeSelelctionOpen, setSizeSelectionOpen] = useState(false)
  const [decorationSelectionOpen, setDecorationSelectedOpen] = useState(false)
  return (
    <div className="flex flex-col items-center p-3 border rounded-xl">
      <div>Testuisns</div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">color:</span>
          <div className="relative">
            <button
              onClick={() => {
                setColorOpen(!colorOpen);
                setDecorationSelectedOpen(false);
                setSizeSelectionOpen(false);
              }}
            >
              <div
                className={`h-5 w-5 border-2 border-black rounded-lg 
                
                `}
                style={{backgroundColor : selectedColor}}
              ></div>
            </button>
            {colorOpen && (
              <div className="absolute bg-white shadow rounded-xl p-3 flex items-center gap-2">
                <button
                  className="h-8 w-8 border-2 border-black rounded-lg bg-white"
                  onClick={() => setSelectedColor("white")}
                ></button>
                <button
                  className="h-8 w-8 border-2 border-white rounded-lg bg-black"
                  onClick={() => setSelectedColor("black")}
                ></button>
                <button
                  className="h-8 w-8 border-2 border-white rounded-lg bg-red-700"
                  onClick={() => setSelectedColor("red")}
                ></button>
                <button
                  className="h-8 w-8 border-2 border-white rounded-lg bg-green-600"
                  onClick={() => setSelectedColor("green")}
                ></button>
                <button
                  className="h-8 w-8 border-2 border-white rounded-lg bg-purple-600"
                  onClick={() => setSelectedColor("purple")}
                ></button>
                <button
                  className="h-8 w-8 border-2 border-white rounded-lg bg-pink-600"
                  onClick={() => setSelectedColor("pink")}
                ></button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">Size:</span>
          <div className="relative w-12">
            <button
             className="w-18"
              onClick={() => {
                setSizeSelectionOpen(!sizeSelelctionOpen);
                setDecorationSelectedOpen(false);
                setColorOpen(false);
              }}
            >
              {sizeOpen}
            </button>
            {sizeSelelctionOpen && (
              <div className="absolute bg-white shadow rounded-xl p-3 flex items-center gap-2">
                <div  className="h-12 w-12 flex items-center justify-center rounded-lg border-2 cursor-pointer" onClick={() => setSizeOpen("xs")}>
                  xs
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2 cursor-pointer" onClick={() => setSizeOpen("s")}>
                  s
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2 cursor-pointer" onClick={() => setSizeOpen("M")}>
                  M
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2 cursor-pointer" onClick={() => setSizeOpen("L")}>
                  L
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2 cursor-pointer" onClick={() => setSizeOpen("XL")}>
                  XL
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2 cursor-pointer" onClick={() => setSizeOpen("XXL")}>
                  XXL
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-3">
          <span className="text-xl">Decoration:</span>
          <div className="relative ">
            <button className="w-25"
              onClick={() => {
                setDecorationSelectedOpen(!decorationSelectionOpen);
                setColorOpen(false);
                setSizeSelectionOpen(false);
              }}
            >
              {decorationOpen}
            </button>
            {decorationSelectionOpen && (
              <div className="absolute bg-white shadow rounded-xl p-3 flex flex-col items-center gap-2">
                <div className="p-2 w-full  flex items-center justify-center rounded-lg border-2 text-lg font-semibold cursor-pointer" onClick={() => setDecorationOpen("Printing")}>
                  Printing
                </div>
                <div className="p-2 w-full  flex items-center justify-center rounded-lg border-2 text-lg font-semibold cursor-pointer" onClick={() => setDecorationOpen("Embroidry")}>
                  Embroidry
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-3">
          <span className="text-xl">Quantity:</span>
          <div className="flex overflow-hidden rounded-xl items-center border-black border-2">
            <button
              className="rounded-none bg-gray-200 border-r border-black"
              onClick={() =>
                setQuantity((prev) => (prev === 1 ? prev : prev - 1))
              }
            >
              -
            </button>
            <span className="flex items-center px-4">{quantity}</span>
            <button
              className="rounded-none bg-gray-200 border-l border-black"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Editor;
