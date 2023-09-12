import { useContext } from "react";
import { ListaProdutoContext } from "../Contextos/ListaProdutosContextProvider";

function useListaProdutos() {
    const context = useContext(ListaProdutoContext)
    return context;
}

export default useListaProdutos;