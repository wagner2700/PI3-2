import Spinner from 'react-bootstrap/Spinner';
import { Outlet, useParams } from "react-router-dom";
import Header from "../../Components/header/Header";
import useProduto from '../../Hooks/useProduto';


function Produto() {
    // const mockApi ={
    //     "id": 1,
    //     "nome": "Hotel Praia Azul",
    //     "descricao": "À beira-mar, nosso hotel proporciona acomodações luxuosas em quartos espaçosos, com vistas deslumbrantes e serviços de classe mundial. Sua experiência única aguarda sua chegada.",
    //     "categorias": {
    //         "id": 3,
    //         "qualificacao": "Luxo",
    //         "descricao": "Experiência premium de hospedagem, com conforto e serviços de alta qualidade.",
    //         "urlImage": "https://www.pousadasincriveis.com/wp-content/uploads/2023/02/hoteis-de-luxo-brasil.jpeg"
    //     },
    //     "imagens": [
    //         {
    //             "id": 1,
    //             "titulo": "Imagem 1 - Hotel Praia Azul",
    //             "urlImage": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/ac/cb/15/palace-praia-hotel.jpg?w=700&h=-1&s=1"
    //         },
    //         {
    //             "id": 2,
    //             "titulo": "Imagem 2 - Hotel Praia Azul",
    //             "urlImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiy7SOzXBwUOAvjpOeNz7lBlYV0LqUCGTKwAuI4A5a_ErLGP2yEJn6UWafb1ufJVoOVg&usqp=CAU"
    //         },
    //         {
    //             "id": 3,
    //             "titulo": "Imagem 3 - Hotel Praia Azul",
    //             "urlImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzgt8UC1qYOy_6LCUhiZ3-RiOSOPFsDwtUC7lV7eumnJ9KTxpLx4tA0O5MPWfJEhqmws4&usqp=CAU"
    //         },
    //         {
    //             "id": 4,
    //             "titulo": "Imagem 4 - Hotel Praia Azul",
    //             "urlImage": "https://www.hotelpraiadourada.com.br/wp-content/uploads/2020/06/foto_quarto_beira_mar2.jpg"
    //         },
    //         {
    //             "id": 5,
    //             "titulo": "Imagem 5 - Hotel Praia Azul",
    //             "urlImage": "https://s2.glbimg.com/adqQc3fL6rSvfQvdEm-4iCaysEs=/smart/e.glbimg.com/og/ed/f/original/2019/12/05/hoteis-praia-lindos2.jpg"
    //         },
    //         {
    //             "id": 6,
    //             "titulo": "Imagem 6 - Hotel Praia Azul",
    //             "urlImage": "https://s2.glbimg.com/Lyn4Dsz8pcFHsj1S41ir1WFBP9o=/smart/e.glbimg.com/og/ed/f/original/2019/12/04/hoteis-praia-lindos-brasil9.jpg"
    //         }
    //     ],
    //     "cidades": {
    //         "id": 3,
    //         "nome": "Brasília",
    //         "pais": "Brasil"
    //     },
    //     "carateristicas": [
    //         {
    //             "id": 1,
    //             "nome": "Cozinha",
    //             "icone": "cozinha"
    //         },
    //         {
    //             "id": 4,
    //             "nome": "Piscina Coletiva",
    //             "icone": "piscina"
    //         },
    //         {
    //             "id": 6,
    //             "nome": "Estacionamento/Garagem",
    //             "icone": "estacionamento"
    //         },
    //         {
    //             "id": 8,
    //             "nome": "Próximo a Mercados",
    //             "icone": "mercados"
    //         },
    //         {
    //             "id": 2,
    //             "nome": "Wi-Fi",
    //             "icone": "wifi"
    //         },
    //         {
    //             "id": 4,
    //             "nome": "Piscina Coletiva",
    //             "icone": "piscina"
    //         },
    //         {
    //             "id": 6,
    //             "nome": "Estacionamento/Garagem",
    //             "icone": "estacionamento"
    //         }
    //     ]
    // }
    //comunicação com BD
    // const params = useParams();
    // // const [dadosApiProduto, setDadosApiProduto] = useState(mockApi);
    // const [dadosApiProduto, setDadosApiProduto] = useState([]);

    // const getDados = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8091/produto/listar/${params.id}`);
    //         setDadosApiProduto(response.data);
    //         console.log(dadosApiProduto)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getDados();
    // }, []);
    const { dadosApiProduto, loading } = useProduto();
    return (
        <>
            {
                loading ? <Spinner animation="border" role="status" style={{ position: "relative", top: "40vh" }}></Spinner> :
                    <> <Header
                        tipo={"Produto"}
                        nomeCategoria={dadosApiProduto.categorias.qualificacao}
                        nomeProduto={dadosApiProduto.nome}
                        localizacaoProduto={`Cidade de ${dadosApiProduto.cidades.nome} no ${dadosApiProduto.cidades.pais}`}
                    />
                        </>
            }
            <Outlet/>



        </>
    );
}

export default Produto;
