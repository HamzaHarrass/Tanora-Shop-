import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

function AddText() {
  const canvasRef = useRef(null);
  const colorInputRef = useRef(null);
  const fontSelectRef = useRef(null);
  const [inputText, setInputText] = useState("Your text here");
  const [canvas, setCanvas] = useState(null);

  const handleFontChange = (e) => {
    const font = e.target.value;
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'textbox') {
      activeObject.set('fontFamily', font);
      canvas.renderAll();
    }
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'textbox') {
      activeObject.set('fill', color);
      canvas.renderAll();
    }
  };

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
    });

    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;

    const addText = () => {
      canvas.clear();
      const text = new fabric.Textbox(inputText, {
        left: 50,
        top: 50,
        width: 200,
        fontSize: 20,
        fontFamily: 'Arial',
        fill: "black",
      });
      canvas.add(text);
    };

    addText();

    const clearCanvas = () => {
      canvas.clear();
    };

    if (colorInputRef.current) {
      colorInputRef.current.addEventListener('input', handleColorChange);
    }

    if (fontSelectRef.current) {
      fontSelectRef.current.addEventListener('change', handleFontChange);
    }

    return () => {
      if (colorInputRef.current) {
        colorInputRef.current.removeEventListener('input', handleColorChange);
      }

      if (fontSelectRef.current) {
        fontSelectRef.current.removeEventListener('change', handleFontChange);
      }
    };

  }, [inputText, canvas]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-center my-2">Add text to your item</h3>
      <input
        type="text"
        placeholder="Type Something..."
        className="mx-24 rounded-2xl p-2 text-center bg-gray-200"
        onChange={handleInputChange}
        value={inputText}
      />
      <div className="flex items-center justify-center py-3">
        <label htmlFor="text-color" className="text-lg font-semibold">Text Color : </label>
        <input
          type="color"
          className="mx-4"
          id="text-color"
          ref={colorInputRef}
          onChange={handleColorChange}
        />
      </div>
      <div className="flex items-center justify-center py-2">
        <label htmlFor="text-font" className="text-lg font-semibold">Font : </label>
        <select
          className="mx-4 p-2 px-6 shadow-lg rounded-lg"
          id="text-font"
          onChange={handleFontChange}
          ref={fontSelectRef}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div className="flex justify-center py-6 ml-36">
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
}

export default AddText;
