

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiscountOffer = () => {
  const [amount, setAmount] = useState(2000);
  const discount = 0.25;
  const discountedPrice = amount - amount * discount;

  return (
    <div className="bg-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Main Flex Container for Image and Details */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Image Section */}
          <div className="mb-4 md:mb-0 m-auto">
            <img
              src="https://kinclimg4.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/goldmine/gms-landing.v3.png"
              alt="Jewelry"
              className="w-full md:w-4/5 h-auto object-cover"
            />
          </div>
        </div>

        {/* Discount and Input Section */}
        <div className="bg-white shadow p-6 rounded-lg mt-6 w-full md:w-3/5 m-auto">
          <h3 className="text-2xl font-bold text-black bg-pink-300 flex justify-center items-center border-4 h-14 m-auto">
            You are eligible for additional <span className="font-bold">25% DISCOUNT</span> on your first installment
          </h3>

          {/* Input and Discount Display - Responsive */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Monthly Amount Input */}
            <div className="relative flex-1 w-full md:w-auto ">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border border-gray-300 rounded w-full py-2 px-4"
                placeholder="Enter Monthly Amount"
              />
              <div className=" absolute flex items-center justify-center text-pink-600 flex-1 w-full md:w-auto">
              <span>You will pay only ₹ {discountedPrice}</span>
            </div>
            </div>
            {/* Email Input */}
            <div className="flex-1 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter Email address"
                className="border border-gray-300 rounded w-full py-2 px-4"
              />
            </div>
           
          </div>

          {/* Start Now Button */}
          <div className="mt-4 flex justify-center md:justify-end items-center gap-4 w-full">
            <button className="bg-red-500 text-white px-6 py-2 rounded-md w-full md:w-auto">
              START NOW
            </button>
          </div>

          {/* Link to Pay Installment */}
          <div className="flex justify-end items-end mt-2">  
            <a href="#" className="text-black text-sm">
             Want to pay your Gold Mine Installment? Click to Pay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
