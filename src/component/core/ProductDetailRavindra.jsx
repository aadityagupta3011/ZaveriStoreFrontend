import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; // Import FaStar from react-icons
import products from '../../Data/products'; // Assuming this is your product data source
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetail = ({ productId }) => {
    const product = products.find((p) => p.id === productId);
    const [selectedImage, setSelectedImage] = useState(product.image); // Default to main image

    // Slider settings
    const thumbnailSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of thumbnails shown at a time
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    // Function to copy text to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`${text} copied to clipboard!`);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:flex">
            {/* Left Section: Product Image */}
            <div className="md:w-1/2 p-4">
                <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={selectedImage}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Right Section: Product Info */}
            <div className="md:w-1/2 p-4">
                {/* Product Title and Price */}
                <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                <p className="text-gray-500 mt-2 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-pink-500">{product.price}</div>
                <div className="text-sm text-gray-400 line-through mb-4">
                    {product.originalPrice}
                </div>

                {/* Ratings */}
                <div className="flex items-center mb-4">
                    <div className="text-yellow-500 flex items-center">
                        <span>{product.rating}</span>
                        <FaStar className="h-5 w-5 ml-1" />
                    </div>
                    <span className="ml-2 text-gray-500 text-sm">({product.reviews})</span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-4">
                    {/* Grid Layout: 2 items per row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/20"
                                alt="30 Day Return"
                                className="w-6 h-6 mr-2"
                            />
                            <span className="text-gray-500">Easy 30 Day Return</span>
                        </div>

                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/20"
                                alt="Lifetime Plating"
                                className="w-6 h-6 mr-2"
                            />
                            <span className="text-gray-500">Lifetime Plating</span>
                        </div>

                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/20"
                                alt="6-Month Warranty"
                                className="w-6 h-6 mr-2"
                            />
                            <span className="text-gray-500">6-Month Warranty</span>
                        </div>

                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/20"
                                alt="925 Silver"
                                className="w-6 h-6 mr-2"
                            />
                            <span className="text-gray-500">Made with 925 Silver</span>
                        </div>
                    </div>
                </div>

                {/* Delivery Estimate */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Estimated Delivery Time</label>
                    <div className="flex">
                        <input
                            type="text"
                            className="border border-gray-300 p-2 rounded-l-md w-2/3"
                            placeholder="Enter 6 digit pincode"
                        />
                        <button className="bg-pink-500 text-white px-4 rounded-r-md">CHECK</button>
                    </div>
                </div>

                {/* Gift Wrap Option */}
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="gift-wrap" />
                    <label htmlFor="gift-wrap" className="ml-2 text-gray-700">
                        Add <span className="text-pink-500">gift wrap</span> to your order (₹50)
                    </label>
                </div>

                {/* Special Offers Section */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Special Offers</h2>
                    {/* Use flex with evenly spaced items */}
                    <div className="flex  justify-between gap-4 w-11/12">
                        <div
                            className="border border-gray-300 p-4 rounded-lg text-center cursor-pointer flex-1 flex items-center justify-center"
                            style={{ aspectRatio: '1 / 1', maxWidth: '150px' }} // Perfect square with max width
                            onClick={() => copyToClipboard('FLAT200')}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-700">FLAT200</h3>
                                <p className="text-sm text-gray-500">Valid on orders above Rs. 1799</p>
                            </div>
                        </div>

                        <div
                            className="border border-gray-300 p-4 rounded-lg text-center cursor-pointer flex-1 flex items-center justify-center"
                            style={{ aspectRatio: '1 / 1', maxWidth: '150px' }} // Perfect square with max width
                            onClick={() => copyToClipboard('FLAT300')}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-700">FLAT300</h3>
                                <p className="text-sm text-gray-500">Valid on orders above Rs. 2700</p>
                            </div>
                        </div>

                        <div
                            className="border border-gray-300 p-4 rounded-lg text-center cursor-pointer flex-1 flex items-center justify-center"
                            style={{ aspectRatio: '1 / 1', maxWidth: '150px' }} // Perfect square with max width
                            onClick={() => copyToClipboard('COMBO50')}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-700">COMBO50</h3>
                                <p className="text-sm text-gray-500">Buy 2 get 3rd at 50% OFF</p>
                            </div>
                        </div>

                        <div
                            className="border border-gray-300 p-4 rounded-lg text-center cursor-pointer flex-1 flex items-center justify-center"
                            style={{ aspectRatio: '1 / 1', maxWidth: '150px' }} // Perfect square with max width
                            onClick={() => copyToClipboard('LOYALTY15')}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-700">LOYALTY15</h3>
                                <p className="text-sm text-gray-500">15% OFF above Rs. 5000</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-2">*Coupon can be applied at checkout</p>
                </div>


                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                        Buy Now
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
