import React, { useState } from "react";
import { useSelector } from "react-redux";
import fallback from "@/assets/images/fallback.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { generateImageArray } from "@/lib/utils";

const ProductImages = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const [selectedImage, setSelectedImage] = useState(0);

  const { thumbnail, image } = selectedProduct;

  const images = generateImageArray(thumbnail, image);

  return (
    <div className="flex contDiv flex-col gap-2  mx-auto md:mr-auto md:ml-0 overflow-x-hidden">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden">
        <Zoom>
          <div className="main-image max-w-[380px] w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
            <img
              src={images[selectedImage] ?? (images[0] || fallback)}
              alt={"product image"}
              className="object-contain w-full h-full"
            />
          </div>
        </Zoom>
      </div>
      <div className="flex flex-row gap-2 mt-5 ml-2">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedImage(i);
            }}
            onMouseOver={() => {
              setSelectedImage(i);
            }}
            className={`bg-white rounded-lg overflow-hidden ${
              selectedImage === i
                ? "ring-2 ring-blue-500"
                : "ring-1 ring-gray-300"
            }`}
          >
            <img
              src={image ?? fallback}
              alt="product image"
              width={48}
              height={48}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
