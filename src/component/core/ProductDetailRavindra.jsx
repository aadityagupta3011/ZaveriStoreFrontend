
import React, { useState, useContext } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; // Import FaStar from react-icons
import { CartContext } from '../../context/CartContext'; // Import CartContext
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetail = ({ productId, productList }) => {
    // Find product based on productId from the passed productList
    const product = productList.find((p) => p.id === productId);
    const [selectedImage, setSelectedImage] = useState(product.image); // Default to main image

    // Access the cart context
    const { addToCart } = useContext(CartContext); 

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

    // Add to Cart Function
    const handleAddToCart = () => {
        const item = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            originalPrice: product.originalPrice,
            rating: product.rating,
            reviews: product.reviews,
        };
        addToCart(item); // Call the addToCart function with the product details
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
                    <div className="grid grid-cols-2 gap-4">
                        {/* Example features */}
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
                        {/* Add more features as needed */}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={handleAddToCart} // Call the handleAddToCart function
                        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                    >
                        Add to Cart
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
