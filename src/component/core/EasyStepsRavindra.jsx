import React from 'react';

const EasySteps = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">How does it work?</h2>

        {/* Container for the circle and steps */}
        <div className="relative flex flex-col items-center md:flex-row md:justify-between md:gap-8">
          
          {/* Circle with text */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center mb-8 md:mb-0 relative">
            <div className="w-72 h-72 border-2 border-pink-300 rounded-full flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-black">3 easy steps</span>
              <p className="mt-2 text-lg text-gray-600">to purchase the jewelry your heart desires</p>
            </div>

            {/* Positioning step numbers along the circle */}
            <div className="absolute top-[-20px]  transform translate-x-1/2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 text-xl font-bold">1</div>
            </div>
            <div className="absolute top-[25%] left-[400px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 text-xl font-bold">2</div>
            </div>
            <div className="absolute top-[70%] right-[150px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 text-xl font-bold">3</div>
            </div>
          </div>

          {/* Steps Details */}
          <div className="w-full md:w-3/5 flex flex-col space-y-8">

            {/* Step 1 */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 text-2xl font-bold">1</div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Pay Monthly</h3>
                <p className="text-gray-600">10 monthly installments with easy payment options</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 text-2xl font-bold">2</div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Get Special Discounts</h3>
                <p className="text-gray-600">Get 25% off on the first month and 100% off the 11th month</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 text-2xl font-bold">3</div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Happy Shopping!</h3>
                <p className="text-gray-600">Use the auto-redeemed voucher provided to you on the date of the 11th installment and buy at any of our stores or online.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
