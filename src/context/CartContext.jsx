import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

// In your CartContext.js or wherever you manage the cart state
const removeFromCart = (itemToRemove) => {
  setCartItems((prevItems) => {
    // Find the index of the first occurrence of the item with the same ID
    const index = prevItems.findIndex((item) => item.id === itemToRemove.id);
    
    if (index !== -1) {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1); // Remove only the found instance
      return updatedItems; // Return the new array without the removed item
    }
    
    return prevItems; // Return the previous state if the item is not found
  });
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
