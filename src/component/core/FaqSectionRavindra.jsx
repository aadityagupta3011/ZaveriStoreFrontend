import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const FAQSection = () => {
  return (
    <div className="bg-pink-50 py-12 px-6 lg:px-12 text-center">
      {/* Note Section */}
      <p className="text-sm text-red-500 font-semibold mb-4">
        NOTE:
      </p>
      <p className="text-gray-600 text-sm mb-8">
        The subscription amount and benefits can be used towards the purchase of either diamond/gemstone studded jewellery or plain gold jewellery.
      </p>

      {/* Main Heading */}
      <h2 className="text-2xl lg:text-3xl font-semibold mb-12">
        Find answers to all your queries here
      </h2>

      {/* Links Section */}
      <div className="flex justify-center items-center space-x-6">
        {/* FAQ Link */}
        <Link to="/faq" className="text-blue-700 hover:text-blue-900 text-sm font-medium">
          View all FAQ &gt;&gt;
        </Link>
        
        {/* Divider */}
        <span className="text-gray-400">|</span>
        
        {/* Terms and Conditions Link */}
        <Link to="/terms" className="text-blue-700 hover:text-blue-900 text-sm font-medium">
          View all Terms & Conditions &gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;
