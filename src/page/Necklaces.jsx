import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import  necklacesProduct from "../Data/productNecklacesRavindra"; // Assuming necklaces data is stored here
import ProductDetail from "../component/core/ProductDetailRavindra"; // Reuse the ProductDetail component

const Necklaces = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [selectedProduct, setSelectedProduct] = useState(null); // Manage the selected product

  const handleAddToCart = (product) => {
    addToCart(product); // Call the addToCart function with the selected product
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the clicked product to be viewed in detail
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null); // Go back to the product list view
  };

  return (
    <div>
      {selectedProduct ? (
        <div>
          <button 
            onClick={handleBackToProducts}
            className="mb-4 bg-gray-200 p-2 rounded-md hover:bg-gray-300"
          >
            Back to Products
          </button>
          {/* Render the detailed product view */}
         
          <ProductDetail productId={selectedProduct.id} productList={necklacesProduct} />
        </div>
      ) : (
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/articles/dropshipping_20jewelry_370d668c-2757-432c-b65e-026977095ad3.png?v=1729266093&originalWidth=1848&originalHeight=782"
            alt="Necklaces Collection Banner"
            className=" w-full h-72 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Necklaces</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {necklacesProduct.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  handleProductClick={handleProductClick}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reuse ProductCard component to display necklaces
const ProductCard = ({ product, handleAddToCart, handleProductClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const couponCode = "NECKLACE5"; // Coupon code for necklaces

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode); // Copy the coupon code to clipboard
    alert("Coupon code copied: " + couponCode); // Notify the user
  };

  return (
    <div
      className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      onClick={() => handleProductClick(product)} // Handle product click to view details
    >
      <img
        src={isHovered ? product.hoverImage : product.image} // Conditionally render image on hover
        alt={product.name}
        className="w-full h-48 object-contain mb-3" // Full-width image, adjusted height
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <div className="flex items-center text-yellow-500">
        <span>{product.rating}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.675a1 1 0 00.95.69h4.897c.969 0 1.372 1.24.588 1.81l-3.964 2.878a1 1 0 00-.364 1.118l1.518 4.675c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.964 2.878c-.785.57-1.84-.196-1.54-1.118l1.518-4.675a1 1 0 00-.364-1.118L1.686 9.102c-.784-.57-.38-1.81.588-1.81h4.897a1 1 0 00.95-.69l1.518-4.675z" />
        </svg>
        <span className="ml-2 text-gray-500 text-sm">({product.reviews})</span>
      </div>
      <div className="mt-2">
        <span className="text-lg font-bold">{product.price}</span>
        <span className="text-sm text-gray-500 line-through ml-2">
          {product.originalPrice}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering parent click event
          handleAddToCart(product);
        }}
        className="bg-pink-500 text-white px-4 py-2 mt-4 rounded hover:bg-pink-600"
      >
        Add to Cart
      </button>

      {/* Coupon Code Section in ProductCard */} 
      <div className="mt-4 p-2 bg-gray-100 rounded-md text-center">
        <p className="text-sm">Use coupon code for 5% off:</p>
        <span className="font-bold">{couponCode}</span>
        <button
          onClick={copyToClipboard}
          className="text-sm text-blue-500 underline ml-2"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Necklaces;
