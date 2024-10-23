import React from "react";
import { Link } from 'react-router-dom';

// Replace these with actual image imports or paths
import giftHeadingImage from '../../assets/g-h.webp'; // Replace with actual image path
import layeredNecklacesImage from '../../assets/ln.webp';
import covetedStylesImage from '../../assets/ts.webp';
import blueStoneManImage from '../../assets/bs-man.webp';
import under10kImage from '../../assets/u-10k_v4.webp';
import under30kImage from '../../assets/u-30k_v4.webp';
import under50kImage from '../../assets/u-50k_v4.webp';
import image from '../../assets/hk.webp'

const GiftSection = () => {
  return (
    <div className="bg-white shadow-white py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-evenly gap-6">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:w-[60%]">
          {/* Layered Necklaces */}
          <Link to="/layered-necklaces" className="flex-1 bg-pink-100 shadow-lg rounded-lg p-6 flex flex-col border-2 border-pink-300">
            <div className="bg-pink-100 flex items-center justify-center rounded-lg mb-4">
              <img src={layeredNecklacesImage} alt="Layered Necklaces" className="h-full w-full object-cover rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Layered Necklaces</h3>
            <p className="mt-2 text-sm text-gray-600">
              Elevate your style with chic layered necklaces for a trendy look.
            </p>
          </Link>

          {/* Coveted Styles */}
          <Link to="/coveted-styles" className="flex-1 bg-pink-100 shadow-lg rounded-lg p-6 flex flex-col border-2 border-pink-300">
            <div className="bg-pink-100 flex items-center justify-center rounded-lg mb-4">
              <img src={covetedStylesImage} alt="Coveted Styles" className="h-full w-full object-cover rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Coveted Styles</h3>
            <p className="mt-2 text-sm text-gray-600">
              A curated selection of BlueStone’s most coveted jewels.
            </p>
          </Link>

          {/* BlueStone Man */}
          <Link to="/bluestone-man" className="flex-1 bg-pink-100 shadow-lg rounded-lg p-6 flex flex-col border-2 border-pink-300">
            <div className="bg-pink-100 flex items-center justify-center rounded-lg mb-4">
              <img src={blueStoneManImage} alt="BlueStone Man" className="h-full w-full object-cover rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">BlueStone Man</h3>
            <p className="mt-2 text-sm text-gray-600">
              Shop the perfect pieces to enhance your man’s unique style.
            </p>
          </Link>
        </div>

        {/* Gift Options Section */}
        <div className="bg-purple-500 rounded-lg p-6 text-center relative w-full lg:w-[35%] h-auto border-2 border-dotted border-purple-800">
          <div className="mb-6">
            <img src={giftHeadingImage} alt="Choose Perfect Gift" className="mx-auto" />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
            {/* Under 10K */}
            <Link to="/under-10k" className="relative w-40 h-40 border-2 border-dotted border-purple-800">
              <img src={under10kImage} alt="Under 10K" className="w-full h-full object-cover" />
            </Link>

            {/* Under 30K */}
            <Link to="/under-30k" className="relative w-40 h-40 border-2 border-dotted border-purple-800">
              <img src={under30kImage} alt="Under 30K" className="w-full h-full object-cover" />
            </Link>

            {/* Under 50K */}
            <Link to="/under-50k" className="relative w-40 h-40 border-2 border-dotted border-purple-800">
              <img src={under50kImage} alt="Under 50K" className="w-full h-full object-cover" />
            </Link>
          </div>
        </div>
      </div>

      {/* Gap section with Link tag */}
      <div className="mt-12">
        <Link to="/jewellery/hello+kitty+and+friends">
          <img src={image} alt="Hello Kitty and Friends Collection" />
        </Link>
      </div>
    </div>
  );
};

export default GiftSection;
