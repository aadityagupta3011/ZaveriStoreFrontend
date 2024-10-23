import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto'; // Important to enable automatic chart type registration

const GoldMineCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(2000);
  const totalPayment = 20000;
  const discountFirstInstallment = 500;
  const discountEleventhInstallment = 2000;
  const totalAfterDiscounts = totalPayment - discountFirstInstallment - discountEleventhInstallment;
  const jewelryWorth = 22000;

  const handleAmountChange = (e) => {
    setMonthlyAmount(e.target.value);
  };

  // Data for Pie Chart
  const pieChartData = {
    labels: ["Total Payment", "Special Discount", "100% Discount"],
    datasets: [
      {
        data: [
          totalAfterDiscounts,
          discountFirstInstallment,
          discountEleventhInstallment,
        ],
        backgroundColor: ["#fbb6ce", "#68d391", "#1e3a8a"],
        hoverBackgroundColor: ["#f687b3", "#48bb78", "#1e40af"],
      },
    ],
  };

  return (
    <div className="p-6 lg:p-12 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Gold Mine Calculator</h1>
      
      {/* Input and Slider */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <label className="block text-sm mb-2">Slide or enter monthly installment amount</label>
          
          {/* Position Input and Button together */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={monthlyAmount}
              onChange={handleAmountChange}
              className="p-2 border rounded w-full"
            />
            <button className="px-6 py-2 bg-orange-500 text-white rounded">
              CHECK
            </button>
          </div>
        </div>
      </div>
      
      {/* Slider */}
      <input
        type="range"
        min="1000"
        max="5000"
        value={monthlyAmount}
        onChange={handleAmountChange}
        className="w-full mb-8"
      />

      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left: Pie chart and text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center">
          <Pie data={pieChartData} className="w-72 h-72" />
        </div>

        {/* Right: Text summary */}
        <div className="w-full lg:w-1/2">
          <ul className="text-sm mb-4">
            <li className="flex items-center">
              <div className="w-4 h-4 bg-pink-300 rounded-full mr-2"></div> Your total payment (Period of 10 months) <span className="ml-auto">₹{totalAfterDiscounts.toLocaleString()}</span>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div> Special Discount on 1st installment (25% off)
              <span className="ml-auto">₹{discountFirstInstallment.toLocaleString()}</span>
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-blue-800 rounded-full mr-2"></div> 100% Discount on 11th installment
              <span className="ml-auto">₹{discountEleventhInstallment.toLocaleString()}</span>
            </li>
          </ul>

          <h2 className="text-xl text-red-600 font-semibold">
            Buy any jewellery worth: ₹{jewelryWorth.toLocaleString()}
          </h2>
          <h3 className="text-lg mt-2 text-green-600 font-bold">
            You effectively pay ₹{totalAfterDiscounts.toLocaleString()} <span className="text-xs font-normal">(11.36% discount)</span>
          </h3>

          {/* Early Redemption */}
          <div className="mt-8 flex justify-between text-center">
            <div>
              <p className="text-sm font-semibold">6th Month</p>
              <p className="text-lg">₹10,500</p>
            </div>
            <div>
              <p className="text-sm font-semibold">8th Month</p>
              <p className="text-lg">₹15,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldMineCalculator;
