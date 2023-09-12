import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CustomCard from "../../Components/cards/CustomCard";
import Calendario from "../../Components/detalhesProduto/Calendario";
import ReservaForm from "../../Components/ReservaForm/ReservaForm";
import ReservaContextProvider from "../../Contextos/ReservaContextProvider";
import useAuth from "../../Hooks/useAuth";
import useProduto from "../../Hooks/useProduto";

function Reserva() {
    const { dadosApiProduto, loading } = useProduto();
    
    return (
        <>
            <ReservaContextProvider>
                {loading ? <p>Carregando Reserva</p> :

                    <Container fluid="md">
                        <Row>
                            <Col xs={8} md={8}>
                                <ReservaForm cidade={dadosApiProduto.cidades.nome}/>
                                <div className="mt-5" style={{ width: "min(100-15px, 700px)" }} >
                                    <h2 style={{ textAlign: "left" }}>Selecione sua data de reserva</h2>
                                    <Calendario inline={true}></Calendario>
                                </div>
                            </Col>
                            <Col xs={4} md={4}>
                                <CustomCard
                                    apiData={dadosApiProduto}
                                    tipo="reserva"
                                />
                            </Col>
                        </Row>
                    </Container>

                }
            </ReservaContextProvider>
        </>
    );
}

export default Reserva;