import React, { createContext, useState } from "react";
export const CarrinhoContext = createContext();

function CarrinhoStorage({ children }) {
    const [carrinho, setCarrinho] = useState([])

    function adicionarItem(item) {
        setCarrinho([...carrinho, item])

    }

    function removeItem(item) {
        const NewCarrinho = carrinho.filter((carrinho) => carrinho.id ? item.id : setCarrinho(NewCarrinho))
    }




    const dados = {
        carrinho,
        adicionarItem,
        removeItem

    };
    return (
        <CarrinhoContext.Provider value={{ dados, carrinho }}>
            {children}

        </CarrinhoContext.Provider>

    )
}

export default CarrinhoStorage