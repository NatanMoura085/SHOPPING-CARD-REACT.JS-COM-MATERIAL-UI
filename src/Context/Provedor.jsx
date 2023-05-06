import React, { createContext, useCallback, useEffect, useState } from "react";
export const CarrinhoContext = createContext();

function CarrinhoStorage({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [counters, setCounters] = useState({
    phone: 0,
    phone2: 0,
    phone3: 0,
  });
  const handleIncrement = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: prevCounters[productId] + 1,
    }));
  };


  console.log(counters)


  const adicionarItem = useCallback((id) => {
    setCartItems((prevCartItems) => [...prevCartItems, id]);
  }, []);
  console.log(adicionarItem);
  const removeItem = (productId) => {
    setCartItems((prevState) =>
      prevState.filter((item) => item.id !== productId)
    );
  };

  const dados = {
    cartItems,
    adicionarItem,
    removeItem,
  };
  return (
    <CarrinhoContext.Provider
      value={{ dados, cartItems, adicionarItem,counters, setCounters,handleIncrement}}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoStorage;
