import React, { useState } from "react";

function Editor({ selectedColor, setSelectedColor }) {
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [decorationOpen, setDecorationOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
                setDecorationOpen(false);
                setSizeOpen(false);
              }}
            >
              <div
                className={`h-5 w-5 border-2 border-black rounded-lg ${
                  selectedColor === "white"
                    ? "bg-white"
                    : selectedColor === "black"
                    ? "bg-black"
                    : ""
                }`}
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
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">Size:</span>
          <div className="relative">
            <button
              onClick={() => {
                setSizeOpen(!sizeOpen);
                setDecorationOpen(false);
                setColorOpen(false);
              }}
            >
              XS
            </button>
            {sizeOpen && (
              <div className="absolute bg-white shadow rounded-xl p-3 flex items-center gap-2">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2">
                  XS
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2">
                  S
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2">
                  M
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2">
                  L
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2">
                  XL
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-lg border-2">
                  XXL
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">Decoration:</span>
          <div className="relative">
            <button
              onClick={() => {
                setDecorationOpen(!decorationOpen);
                setColorOpen(false);
                setSizeOpen(false);
              }}
            >
              Printing
            </button>
            {decorationOpen && (
              <div className="absolute bg-white shadow rounded-xl p-3 flex flex-col items-center gap-2">
                <div className="p-2 w-full  flex items-center justify-center rounded-lg border-2 text-lg font-semibold">
                  Printing
                </div>
                <div className="p-2 w-full  flex items-center justify-center rounded-lg border-2 text-lg font-semibold">
                  Embroidry
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
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
