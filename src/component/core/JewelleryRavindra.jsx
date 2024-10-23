import React from "react";
import { Link } from "react-router-dom";

const DesignLedJewellery = () => {
  return (
    <div className="bg-white -mt-10">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Design Led Jewellery
      </h2>
      {/* Flex container for the three images */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">

        {/* Item 1 */}
        <Link to="/path-for-shoulder-dusters" className="flex flex-col items-center relative group">
          <div className="w-full h-auto overflow-hidden rounded-xl mb-4 relative">
            <img
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-3.png" // Replace with actual image path
              alt="Shoulder Dusters"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" // Added transition and scale on hover
            />
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-p1.png" // Replace with actual icon path
              alt="Shoulder Dusters Icon" 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-80 h-44 shadow-lg" // Icon remains unchanged
            />
          </div>
          <p className="text-gray-600 text-center">Shoulder Dusters</p>
        </Link>

        {/* Item 2 */}
        <Link to="/path-for-watch-jewellery" className="flex flex-col items-center relative group">
          <div className="w-full h-auto overflow-hidden rounded-xl mb-4 relative">
            <img
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-1.png" // Replace with actual image path
              alt="Watch Jewellery"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" // Added transition and scale on hover
            />
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-p2.png" // Replace with actual icon path
              alt="Watch Jewellery Icon" 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-80 h-44 shadow-lg" // Icon remains unchanged
            />
          </div>
          <p className="text-gray-600 text-center">Watch Jewellery</p>
        </Link>

        {/* Item 3 */}
        <Link to="/path-for-y-necklaces" className="flex flex-col items-center relative group">
          <div className="w-full h-auto overflow-hidden rounded-xl mb-4 relative">
            <img
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-2.png" // Replace with actual image path
              alt="Y Necklaces"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" // Added transition and scale on hover
            />
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-p3.png" // Replace with actual icon path
              alt="Y Necklaces Icon" 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-80 h-44 shadow-lg" // Icon remains unchanged
            />
          </div>
          <p className="text-gray-600 text-center">Y Necklaces</p>
        </Link>
      </div>
    </div>
  );
};

export default DesignLedJewellery;
