import React, { useState, createContext, useContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setShowTotalPrice(true);
  };

  const clearCart = () => {
    setCart([]);
    setShowTotalPrice(false);
    setTotalPrice(0);
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, totalPrice, showTotalPrice, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const TotalPrice = () => {
  const { totalPrice, showTotalPrice } = useContext(CartContext);

  return (
    <div>
      {showTotalPrice && <h2>Total Price: R{totalPrice.toFixed(2)}</h2>}
    </div>
  );
};

export default TotalPrice;


