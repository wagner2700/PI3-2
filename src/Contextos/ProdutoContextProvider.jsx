import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProdutoContext = createContext({})

function ProdutoContextProvider({ children }) {
    const params = useParams();
    const [dadosApiProduto, setDadosApiProduto] = useState([])
    const [loading, setLoading] = useState(true);

    const getDados = async () => {

        if (params.id) {
            try {
                const response = await axios.get(`http://localhost:8091/produto/listar/${params.id}`);
                setDadosApiProduto(response.data);
                setLoading(false)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        } else {
            return null
        }


    }
    useEffect(() => {
        getDados();
    }, [params.id]);
    return (
        <ProdutoContext.Provider value={{ dadosApiProduto, loading }}>
            {children}
        </ProdutoContext.Provider>


    )
}
export default ProdutoContextProvider;