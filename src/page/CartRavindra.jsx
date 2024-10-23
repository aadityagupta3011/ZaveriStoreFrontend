import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa"; // Import the trash icon
import {Link} from "react-router-dom";

const CartRavindra = ({ setIsCartOpen }) => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Access cart items and remove function from context
  const [couponCode, setCouponCode] = useState(""); // State for coupon code
  const [discount, setDiscount] = useState(0); // State for discount amount

  // Function to format price string to number
  const parsePrice = (price) => {
    return parseFloat(price.replace(/[₹,]/g, "").trim()) || 0; // Remove currency symbol and commas
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + parsePrice(item.price); // Sum up the parsed prices
  }, 0);

  // Function to format number to currency string
  const formatCurrency = (amount) => {
    return `₹${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; // Format number with commas
  };

  // Function to apply the coupon code

  const totalPriceAfterShipping = totalPrice + 5.99;
  const applyCoupon = () => {
    let newDiscount = 0;

    // Apply discount based on total price of all items in the cart
    if (couponCode === "DISCOUNT10") {
      newDiscount = totalPrice * 0.10; // Set discount to 10% of total price
    } else if (couponCode === "DISCOUNT5") {
      newDiscount = totalPrice * 0.05; // Set discount to 5% of total price
    } else {
      alert("Invalid coupon code"); // Handle invalid coupon
    }

    // Only set the discount if it's greater than zero
    if (newDiscount > 0) {
      setDiscount(newDiscount); // Update discount state
    } else {
      setDiscount(0); // Reset discount for invalid coupon
    }

    setCouponCode(""); // Clear the coupon code input after applying
  };

  // Calculate final total price after applying discount and adding shipping
  const finalTotalPrice = Math.round(totalPriceAfterShipping - discount); // Round the total price

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Cart Items Section */}
            <div className="md:col-span-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center">
                    {/* Add image if available */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-lg font-medium">{item.price}</span>
                  {/* Delete Button with Icon */}
                  <button
                    onClick={() => removeFromCart(item)} // Call the remove function
                    className="text-red-600 hover:text-red-800 ml-4"
                    aria-label="Remove item from cart" // Accessibility feature
                  >
                    <FaTrash className="w-6 h-6" /> {/* Render the trash icon */}
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Subtotal</span>
                <span className="font-bold">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Shipping</span>
                <span className="font-bold">₹5.99</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span>Discount</span>
                <span className="font-bold">-{formatCurrency(discount)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold py-2">
                <span>Total</span>
                <span>{formatCurrency(finalTotalPrice)}</span> {/* Display final total price */}
              </div>
              
              {/* Coupon Code Input Section */}
              <div className="flex mb-4">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)} // Update coupon code state
                  placeholder="Enter coupon code"
                  className="border rounded-l px-2 py-2 flex-grow"
                />
                <button
                  onClick={applyCoupon} // Apply the coupon code
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r"
                >
                  Apply
                </button>
              </div>
              <Link
  to="/Checkout"
  state={{ finalTotalPrice: finalTotalPrice }}
>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mt-4">
    Proceed to Checkout
  </button>
</Link>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartRavindra;
