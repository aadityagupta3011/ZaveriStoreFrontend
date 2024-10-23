// App.jsx (or any React component)
import React from 'react';

const Banner = () => {
  return (
    <div className=" rounded-md p-6 mx-auto max-w-full my-10 bg-pink-100 shadow-md ">
      <div className=" text-center py-6 rounded-md  flex justify-center items-center space-y-0 gap-3">
        <div className="text-lg md:text-xl lg:text-2xl font-medium">
          <span className="text-gray-700">Gold Mine </span>
          <span className="text-red-500 font-bold">10+1</span>
          <span className="text-gray-700"> Monthly Plan</span>
        </div>
        <div className="text-sm md:text-base lg:text-lg text-gray-500">
          (Pay 10 Installments, get 25% Off on 1st + 100% Off on last)
        </div>
        <button className="bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-md font-semibold shadow transition duration-300 mt-4">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
