import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobaStyle from './Style/GobalStyle'
import CarrinhoStorage from './Context/Provedor'
import MultiActionAreaCard from './Components/Card/Card'
import ButtonAppBar from './Components/NavBar/NavBar'
const phone = {
  id:1,
  title: "Phone XYZ",
  description: "O novo modelo de celular XYZ é a escolha perfeita para quem busca tecnologia e design inovadores em um único dispositivo.",
  image: "./public/phone.jpg",
  price: "1000,00"
}
const phone2 = {
  id:2,
  title: "IPHONE",
  description: "O iPhone 14 é a nova geração de smartphones da Apple que traz uma combinação única de design elegante, desempenho excepcional.",
  image: "./public/iphone14.png",
  price: "1000,00"
}
const phone3 = {
  id:3,
  title: "XIAOME",
  description: " Xiaomi apresentam tecnologia de ponta, com telas de alta resolução, câmeras potentes, baterias duradouras e design moderno.",
  image: "./public/xiaome.jpg",
  price: "1000,00"
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoStorage>
    <ButtonAppBar />
    <MultiActionAreaCard title={phone.title}
      description={phone.description}
      image={phone.image}
    />
    <MultiActionAreaCard title={phone2.title}
      description={phone2.description}
      image={phone2.image} />
    <MultiActionAreaCard title={phone3.title}
      description={phone3.description}
      image={phone3.image} />
    <GlobaStyle />
    <App />
    </CarrinhoStorage>
  </React.StrictMode>,
)
