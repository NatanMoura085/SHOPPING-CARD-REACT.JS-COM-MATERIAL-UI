import React, { createContext, useCallback, useEffect, useState } from "react";
export const CarrinhoContext = createContext();

function CarrinhoStorage({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [quantidades, setQuantidades] = useState({})

    const adicionarItem = useCallback((id) => {
        setCartItems((prevCartItems) => [...prevCartItems, id])

    }, [])
    console.log(adicionarItem)
    const removeItem = (productId) => {
        setCartItems((prevState) =>
            prevState.filter((item) => item.id !== productId)
        );
    };

  
    const Qtdcard = useCallback((id) => {
        setCartItems((prevCartItems) => [...prevCartItems, id]);
        setQuantidades((prevQuantidades) => {
            const newState = { ...prevQuantidades }

            if (newState[id]) {
                newState[id] += 1

            } else {
                newState[id] = 1;
            }
            return newState;
        });
    }, []);



    const dados = {
        cartItems,
        adicionarItem,
        removeItem,
        Qtdcard

    };
    return (
        <CarrinhoContext.Provider value={{ dados, cartItems, adicionarItem, Qtdcard }}>
            {children}

        </CarrinhoContext.Provider>

    )
}

export default CarrinhoStorage