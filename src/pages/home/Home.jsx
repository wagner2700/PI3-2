import CardGroup from "react-bootstrap/CardGroup"
import Header from "../../Components/header/Header";
import Stack from 'react-bootstrap/Stack';
import "./home.css"
import Spinner from "react-bootstrap/esm/Spinner";
import CustomCard from "../../Components/cards/CustomCard";
import useListaProdutos from "../../Hooks/useListaProdutos";
import { useEffect, useState } from "react";



function Home() {
    const { getProdutoPorCategoria, produtoPorCategoria, produtoPorCidade, listaProdutos, loading, cidades, categorias, setProdutosPorCategoria, setProdutoPorCidade } = useListaProdutos();
    const [listaFiltrada, setListaFiltrada] = useState([])
    const [vazio, setVazio] = useState(false)


    useEffect(() => {
        if (produtoPorCategoria.length > 0 && produtoPorCidade.length > 0) {
            let teste = produtoPorCategoria.filter(item => { return item.cidades.nome === produtoPorCidade[0].cidades.nome })
            teste.length>0 ? (setListaFiltrada(teste), setVazio(false)) : (setListaFiltrada([]), setVazio(true))
        } else {
            setListaFiltrada([...produtoPorCategoria, ...produtoPorCidade])

        }

    }, [produtoPorCidade, produtoPorCategoria])
    return (
        <>
            {!loading ? (
                <Stack className="" direction="vertical">
                    <Header apiCidades={cidades} />
                    <CardGroup style={{ width: "95%", margin: "22vh 40px 0 40px" }} className="categorias gap-3">
                        <h2 className="h2Buscar" >Buscar por tipo de acomodação</h2>
                        {categorias.map((categoria) => {
                            return (
                                <CustomCard tipo={"categoria"} apiData={categoria} key={categoria.id} onClick={() => { getProdutoPorCategoria(categoria.qualificacao) }}
                                    className="testeHover"
                                ></CustomCard>
                            )
                        })}
                    </CardGroup>
                    <div className="cardG">
                        <h2 className="h2Recomendado">Recomendações</h2>
                        {vazio? <><button onClick={()=>{setProdutosPorCategoria([]), setProdutoPorCidade([]), setVazio(false)}}>Não há hotéis para o filtro selecionado</button></>:  null}
                        <CardGroup style={{ width: "100%", padding: '1rem 3rem', backgroundColor: "#e5e5e5" }} className="cardGroup gap-5 d-flex justify-content-between">
                           {/* ADICIONAR UM PEQUENO DETALHE SÓ PARA REMOVER O FILTRO E ALGO VISUAL VISUALIZANDO QUE O FILTRO ESTÁ ATIVO */}
                            {listaFiltrada.length > 0 && !vazio ?
                            
                                listaFiltrada.map((item, index) => {
                                    return (
                                        <CustomCard key={item.id} apiData={item} />
                                    )

                                })
                                :
                                listaProdutos.map((item) => {

                                    return (
                                        <CustomCard key={item.id} apiData={item} />
                                    )

                                })}
                        </CardGroup>
                    </div>
                </Stack>)
                :
                <Spinner animation="border" role="status" style={{ position: "relative", top: "80vh" }} />}

        </>
    );
}

export default Home;