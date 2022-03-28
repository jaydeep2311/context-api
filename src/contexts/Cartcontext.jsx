import React from "react";

export const CartContext = React.createContext();

export function CartContextProvider({ children }) {
  const [cartCount, setcartCount] = React.useState(0);
  function handlecartcount(val) {
    setcartCount(cartCount + val);
  }
  return (
    <CartContext.Provider value={{ cartCount, handlecartcount }}>
      {children}
    </CartContext.Provider>
  );
}
