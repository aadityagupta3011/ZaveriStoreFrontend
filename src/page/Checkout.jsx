import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ZaveriQR from "../Images/ZaveriQR.jpg"

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    upiReference: "", // New field for UPI Reference/Transaction ID
  });

  // Calculate total price with discount applied
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[₹,]/g, "").trim()), 0);
  const discount = 0; // Assuming a static discount, replace with actual logic
  const finalPrice = Math.round(totalPrice - discount); // Adjust for your discount logic

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, cartItems, totalPrice: finalPrice }), // Use the final price
      });
      const result = await response.json();
      console.log("Order successful:", result);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">UPI Reference</label>
            <input
              type="text"
              name="upiReference"
              value={formData.upiReference}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex justify-center" >
          <img src={ZaveriQR} alt="" srcset="" />
        </div>
        <h1 className="text-red-600 font-bold text-2xl flex justify-center mt-2">Kindly Pay : ₹ {finalPrice} </h1>
        <h2 className="text-2xl font-semibold mb-6 mt-4">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between border-t pt-2">
            <span>Total Price</span>
            <span className="font-bold">{`₹${finalPrice}`}</span> {/* Display final price */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
