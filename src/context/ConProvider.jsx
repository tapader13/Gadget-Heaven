import { createContext, useState } from 'react';

export const contextProvider = createContext(null);
export const ConProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const addToCart = (product) => {
    setCartData([...cartData, product]);
  };

  const addToWish = (product) => {
    setWishData([...wishData, product]);
  };
  return (
    <contextProvider.Provider
      value={{ cartData, addToCart, wishData, addToWish }}
    >
      {children}
    </contextProvider.Provider>
  );
};
