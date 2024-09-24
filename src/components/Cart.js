// src/components/CartContext.js
import React, { useState, createContext, useContext, useEffect } from 'react';

// Create a context for the cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0); // State to keep track of the total price
  const [cart, setCart] = useState([]); // State to keep track of the items in the cart
  const [showTotalPrice, setShowTotalPrice] = useState(false); // State to control the display of the total price

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setShowTotalPrice(true);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    setShowTotalPrice(false);
    setTotalPrice(0);
  };

  // Effect to calculate the total price whenever the cart changes
  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    // Provide the cart context values to the children components
    <CartContext.Provider value={{ cart, totalPrice, showTotalPrice, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const TotalPrice = () => {
  const { totalPrice, showTotalPrice } = useContext(CartContext); // Access cart context values

  return (
    <div>
      {showTotalPrice && <h2>Total Price: R{totalPrice.toFixed(2)}</h2>} {/* Display total price if applicable */}
    </div>
  );
};

export default TotalPrice;




