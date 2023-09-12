import './App.css';
import Navbar from "./Components/navbar/Navbar"
import Footer from "./Components/footer/Footer"
import { Outlet } from 'react-router-dom';
import AuthContextProvider from './Contextos/AuthContextProvider';
import IconsContextProvider from './Contextos/IconsContextProvider';
import ProdutoContextProvider from './Contextos/ProdutoContextProvider';
import ListaProdutosContextProvider from './Contextos/ListaProdutosContextProvider';


function App() {

  return (
    <>
      <ListaProdutosContextProvider>
        <IconsContextProvider>
          <AuthContextProvider>
            <Navbar />
            <div className='application'>
              <ProdutoContextProvider>
                <Outlet />
              </ProdutoContextProvider>
            </div>
            <Footer />
          </AuthContextProvider>
        </IconsContextProvider>
      </ListaProdutosContextProvider>
    </>
  )
}

export default App