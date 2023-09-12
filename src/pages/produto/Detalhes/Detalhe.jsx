import DetalhesProduto from "../../../Components/detalhesProduto/DetalhesProduto";
import GaleriaImagens from "../../../Components/galeria/GaleriaImages";
import useProduto from "../../../Hooks/useProduto";

function Detalhe() {
    const { dadosApiProduto, loading } = useProduto();

    return (
        <>
            {loading ? <p>Carregando detalhes</p> :
                <>
                    <GaleriaImagens imagens={dadosApiProduto.imagens} />
                    <DetalhesProduto apiData={dadosApiProduto} />
                </>
            }
        </>
    );
}

export default Detalhe;