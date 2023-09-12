import { useContext } from "react";

import { ProdutoContext } from "../Contextos/ProdutoContextProvider";

function useProduto() {
    const context = useContext(ProdutoContext)
    return context;
}

export default useProduto;