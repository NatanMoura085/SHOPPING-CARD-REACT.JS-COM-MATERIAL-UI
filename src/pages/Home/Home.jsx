import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import GlobaStyle from "../../Style/GobalStyle";
import MultiActionAreaCard from "../../Components/Card/Card";
import ButtonAppBar from "../../Components/NavBar/NavBar";
import { CarrinhoContext } from "../../Context/Provedor";

export default function Home() {
  const { counters, setCounters,handleIncrement} = useContext(CarrinhoContext);
  const phone = {
    id: "phone",
    title: "Phone XYZ",
    description:
      "O novo modelo de celular XYZ é a escolha perfeita para quem busca tecnologia e design inovadores em um único dispositivo.",
    image: "./public/phone.jpg",
    price: "R$1000",
    count: counters.phone,
   
  };

  const phone2 = {
    id: "phone2",
    title: "IPHONE",
    description:
      "O iPhone 14 é a nova geração de smartphones da Apple que traz uma combinação única de design elegante, desempenho ",
    image: "./public/iphone14.png",
    price: " R$1000",
    count: counters.phone2,
  };

  const phone3 = {
    id: "phone3",
    title: "XIAOME",
    description:
      " Xiaomi apresentam tecnologia de ponta, com telas de alta resolução, câmeras potentes, baterias duradouras e design.",
    image: "./public/xiaome.jpg",
    price: " R$1000",
    count: counters.phone3,
  };

  return (
    <>
      <ButtonAppBar />
      <MultiActionAreaCard
        id={phone.id}
        title={phone.title}
        price={phone.price}
        description={phone.description}
        image={phone.image}
        count={phone.count}
        onIncrement={() => handleIncrement(phone.id)}
      />
      <MultiActionAreaCard
        id={phone2.id}
        title={phone2.title}
        price={phone2.price}
        description={phone2.description}
        image={phone2.image}
        count={phone2.count}
        onIncrement={() => handleIncrement(phone2.id)}
      />
      <MultiActionAreaCard
        id={phone3.id}
        title={phone3.title}
        price={phone3.price}
        description={phone3.description}
        image={phone3.image}
        count={phone3.count}
        onIncrement={() => handleIncrement(phone3.id)}
      />
      <GlobaStyle />
    </>
  );
}
