import { createContext, useState } from 'react';

export const contextProvider = createContext(null);
export const ConProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const addToCart = (product) => {
    setCartData([...cartData, product]);
  };
  const removeCart = (product) => {
    setCartData(
      cartData.filter((item) => item.product_id !== product.product_id)
    );
  };
  const clearCart = () => {
    setCartData([]);
  };
  const addToWish = (product) => {
    setWishData([...wishData, product]);
  };
  const removeWish = (product) => {
    setWishData(
      wishData.filter((item) => item.product_id !== product.product_id)
    );
  };
  const clearWish = () => {
    setWishData([]);
  };
  return (
    <contextProvider.Provider
      value={{
        cartData,
        addToCart,
        wishData,
        addToWish,
        removeCart,
        removeWish,
        clearCart,
        clearWish,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};
