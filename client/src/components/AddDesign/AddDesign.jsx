import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";

function AddDesign({ imageUploaded, setImageUploaded }) {
  const [canvas, setCanvas] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 900,
      height: 900,
    });

    setCanvas(newCanvas);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = () => {
          newCanvas.clear();
          const image = new fabric.Image(imgObj);
          newCanvas.add(image);
          newCanvas.renderAll();
          setImageUploaded(event.target.result);
        };
      };

      reader.readAsDataURL(file);
    };

    const inputElement = document.getElementById("designuploader");
    inputElement.addEventListener("change", handleFileChange);

    return () => {
      inputElement.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <>
      <h3 className="text-2xl font-bold text-center">Your uploaded designs</h3>
      <div className="flex justify-center mb-4">
        <label htmlFor="designuploader" className="text-lg shadow rounded-lg p-2 font-bold text-center">
          Upload design from computer
        </label>
        <input type="file" className="hidden" id="designuploader" />
      </div>
      <h3 className="text-2xl font-semibold text-center">
        {imageUploaded ? "Uploaded Design:" : "You did not upload any designs yet."}
      </h3>
      <div>
        {imageUploaded ? (
          <img src={imageUploaded} alt="Uploaded Design" className="max-w-xs mx-auto" />
        ) : (
          <p className="text-center">No design uploaded yet.</p>
        )}
      </div>
      <canvas ref={canvasRef} className="border border-black mt-4"></canvas>
    </>
  );
}

export default AddDesign;
