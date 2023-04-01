
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobaStyle from '../../Style/GobalStyle'
import MultiActionAreaCard from '../../Components/Card/Card'
import ButtonAppBar from '../../Components/NavBar/NavBar'
export default function Home() {
    const phone = {
        id: 'phone',
        title: "Phone XYZ",
        description: "O novo modelo de celular XYZ é a escolha perfeita para quem busca tecnologia e design inovadores em um único dispositivo.",
        image: "./public/phone.jpg",
        price: "R$1000"
    }
    const phone2 = {
        id: 'phone2',
        title: "IPHONE",
        description: "O iPhone 14 é a nova geração de smartphones da Apple que traz uma combinação única de design elegante, desempenho ",
        image: "./public/iphone14.png",
        price: " R$1000"
    }
    const phone3 = {
        id: 'phone3',
        title: "XIAOME",
        description: " Xiaomi apresentam tecnologia de ponta, com telas de alta resolução, câmeras potentes, baterias duradouras e design.",
        image: "./public/xiaome.jpg",
        price: " R$1000"
    }

    return (
        <>
            <ButtonAppBar />
            <MultiActionAreaCard id={phone.id} title={phone.title} price={phone.price}
                description={phone.description}
                image={phone.image}
            />
            <MultiActionAreaCard id={phone2.id} title={phone2.title} price={phone2.price}
                description={phone2.description}
                image={phone2.image} />
            <MultiActionAreaCard id={phone3.id} title={phone3.title} price={phone3.price}
                description={phone3.description}
                image={phone3.image} />
            <GlobaStyle />

        </>

    )
}