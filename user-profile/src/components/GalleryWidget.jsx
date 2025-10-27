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
        <h3 className="text-lg text-white font-semibold bg-gray-800 px-5 py-2 rounded-3xl">Gallery</h3>
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
              src={"https://image.lexica.art/full_webp/6d93facf-329c-44a1-8e96-40ac315227ce"}
              alt="Gallery"
              className="w-full h-30 object-cover hover:scale-105 transition-transform duration-300 bg-slate-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
