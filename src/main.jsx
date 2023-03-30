import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobaStyle from './Style/GobalStyle'
import CarrinhoStorage from './Context/Provedor'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoStorage>
      <GlobaStyle />
      <App />
      <Home />
    </CarrinhoStorage>
  </React.StrictMode>,
)
