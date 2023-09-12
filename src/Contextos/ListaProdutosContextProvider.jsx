import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ListaProdutoContext = createContext({})

function ListaProdutosContextProvider({ children }) {
    const [produtoPorCategoria, setProdutosPorCategoria] = useState([]);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categorias, setCategorias] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [produtoPorCidade, setProdutoPorCidade] = useState([])
    const getCidades = async () => {
        try {
            const response = await axios.get("http://localhost:8091/cidade/listar")
            setCidades(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategorias = async () => {
        try {

            const response = await axios.get("http://localhost:8091/categoria/listar")
            setCategorias(response.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const getProdutoPorCidade = async (cidade) => {
        try {
            const response = await axios.get(`http://localhost:8091/produto/cidade/${cidade}`)
            setProdutoPorCidade(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)

        }
    }

    const getProdutoPorCategoria = async (categoria) => {
        try {

            const response = await axios.get(`http://localhost:8091/produto/categoria/${categoria}`)
            setProdutosPorCategoria(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)

        }

    }

    const getAll = async () => {
        try {

            const response = await axios.get(`http://localhost:8091/produto/listar`)
            if (response.data) {
                setLoading(false)
                setListaProdutos(response.data)

            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        const carregarDados = async () => {
            await getAll()
            await getCategorias()
            await getCidades()
        }
        setTimeout(() => {
            carregarDados()
        }, 800)

    }, [])
    return (
        <ListaProdutoContext.Provider value={{
            getProdutoPorCategoria,
            produtoPorCategoria,
            loading,
            listaProdutos,
            categorias,
            cidades,
            getProdutoPorCidade,
            produtoPorCidade,
            setProdutoPorCidade,
            setProdutosPorCategoria
        }}>{children}</ListaProdutoContext.Provider>

    );
}

export default ListaProdutosContextProvider;