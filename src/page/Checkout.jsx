import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation } from "react-router-dom";
import ZaveriQR from "../Images/ZaveriQR.jpg";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const { finalTotalPrice } = location.state || { finalTotalPrice: 0 }; // Retrieve the state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    upiReference: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, cartItems, totalPrice: finalTotalPrice }),
      });
      const result = await response.json();
      alert("Order placed successfully!");

      // Wait for 2 seconds before clearing the form
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          upiReference: "",
        });
        // Optionally, you can reload the page instead of clearing the form
        // window.location.reload();
      }, 2000);

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
          <button type="submit"
      
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex justify-center h-[25vw]">
          <img src={ZaveriQR} alt="QR Code" />
        </div>
        <h1 className="text-red-600 font-bold text-2xl flex justify-center mt-2">
          Kindly Pay: ₹ {finalTotalPrice}
        </h1>
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
            <span className="font-bold">{`₹${finalTotalPrice}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
