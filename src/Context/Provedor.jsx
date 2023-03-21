import React, { createContext, useState } from "react";
export const CarrinhoContext = createContext();

function CarrinhoStorage({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function adicionarItem(item) {
        setCarrinho([...cartItems, item])

    }

    const removeItem = (productId) => {
        setCartItems((prevState) =>
          prevState.filter((item) => item.id !== productId)
        );
      };
    


    const dados = {
        cartItems,
        adicionarItem,
        removeItem

    };
    return (
        <CarrinhoContext.Provider value={{ dados, cartItems }}>
            {children}

        </CarrinhoContext.Provider>

    )
}

export default CarrinhoStorage