import React from 'react';
import Poster from "/images/Poster.png"

const BlueStonePromise = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-pink-100 mt-20">
      <div className="p-6 md:flex md:items-center md:justify-between rounded-lg shadow-lg">
        {/* Left Image Section */}
        <img src={Poster} alt="" />
      </div>
    </div>
  );
}

export default BlueStonePromise;
