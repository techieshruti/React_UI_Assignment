import React, { useState } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]);

  const addImage = () => {
    const newImg = prompt("Enter image URL:");
    if (newImg) setImages([...images, newImg]);
  };

  return (
    <div className="bg-[#3d4045] p-5 rounded-2xl shadow-lg max-w-[600px] w-full mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <button
          onClick={addImage}
          className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-lg text-sm text-gray-200 flex items-center gap-1"
        >
          + Add Image
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg">
            <img
              src={src}
              alt="Gallery"
              className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
