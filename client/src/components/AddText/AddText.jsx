import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

function AddText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
    });

    const addText = () => {
      const text = new fabric.Textbox("Your text here", {
        left: 50,
        top: 50,
        width: 200,
        fontSize: 20,
        fontFamily: 'Arial',
        fill: "black",
      });
      canvas.add(text);
    };

    const clearCanvas = () => {
      canvas.clear();
    };

    const handleColorChange = (e) => {
      const color = e.target.value;
      const activeObject = canvas.getActiveObject();
      if (activeObject && activeObject.type === 'textbox') {
        activeObject.set('fill', color);
        canvas.renderAll();
      }
    };

    const handleFontChange = (e) => {
      const font = e.target.value;
      const activeObject = canvas.getActiveObject();
      if (activeObject && activeObject.type === 'textbox') {
        activeObject.set('fontFamily', font);
        canvas.renderAll();
      }
    };

    document.getElementById('text-color').addEventListener('input', handleColorChange);

    document.getElementById('text-font').addEventListener('change', handleFontChange);

    // Cleanup for event listeners
    return () => {
      document.getElementById('text-color').removeEventListener('input', handleColorChange);
      document.getElementById('text-font').removeEventListener('change', handleFontChange);
      canvas.dispose();
    };

  }, []);

  return (
    <>
      <h3 className="text-2xl font-bold text-center my-2">Add text to your item</h3>
      <input type="text" placeholder="Type Something..." className="mx-24 rounded-2xl p-2 text-center bg-gray-200" />
      <div className="flex items-center justify-center py-3">
        <label htmlFor="text-color" className="text-lg font-semibold">Text Color : </label>
        <input type="color" className="mx-4" id="text-color" />
      </div>
      <div className="flex items-center justify-center py-2">
        <label htmlFor="text-font" className="text-lg font-semibold">Font : </label>
        <select className="mx-4 p-2 px-6 shadow-lg rounded-lg" id="text-font" onChange={(e)=>handleFontChange(e)}>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div className="flex justify-center py-6">
        <img className="w-96" src="https://stitched-brand-next.herokuapp.com/assets/images/designer/add-text.png" alt="" />
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
}

export default AddText;
