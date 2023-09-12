import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Cadastro from './pages/cadastro/Cadastro.jsx'
import Produto from './pages/produto/Produto.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Reserva from './pages/reserva/Reserva.jsx'
import Detalhe from './pages/produto/Detalhes/Detalhe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Navigate to={'/home'}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/produto' element={<Produto/>}>
        <Route path=':id' element={<Detalhe/>}/>
        <Route path=':id/reserva' element={<Reserva/>}/>
      </Route>
    </Route>
  </Routes>
  
  </BrowserRouter>
)