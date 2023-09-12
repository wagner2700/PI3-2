import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card";
import ReactStars from 'react-stars';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import './customCard.css'
import { FaMapMarkerAlt, FaSwimmer, FaWifi } from "react-icons/fa";
import useIcons from "../../Hooks/useIcons";




function CustomCard({ tipo, apiData, onClick }) {
    const { icons } = useIcons();

    return (
        tipo === "categoria" ?
            <Card className='text-start shadow-sm p-3 mb-5 bg-white rounded rounded-4' onClick={onClick} >
                <Card.Img variant='top' className='rounded-top-4' src={apiData.urlImage ?? "https://cf.bstatic.com/xdata/images/hotel/max1024x768/54694623.jpg?k=855874b68a0e67996c96f67d42685f3c949b255e735022904e10af86d092eaf0&o=&hp=1"} style={{ width: '100%', aspectRatio: "3/2" }} />
                <Card.Body>
                    <Card.Title className="cardTitle">{apiData.qualificacao}</Card.Title>
                    <Card.Subtitle className="cardSub">800.000 hotéis</Card.Subtitle>
                </Card.Body>
            </Card>
            :
            <Card className={tipo == "reserva" ? "shadow-sm p-3 mb-5 mt-5 bg-white rounded" : "shadow-sm p-3 mb-5 bg-white rounded d-flex flex-row"} style={tipo != "reserva"? {width: '40%', flex: "0 0 45%", height: '20rem'}: null} >
                <Card.Img variant="top" src={apiData.imagens[1].urlImage ?? "https://cf.bstatic.com/xdata/images/hotel/max1024x768/54694623.jpg?k=855874b68a0e67996c96f67d42685f3c949b255e735022904e10af86d092eaf0&o=&hp=1"} style={tipo == "reserva" ? { width: "100%", aspectRatio: "1/1" } : { width: "40%", aspectRatio: "1/1", }} />
                <Card.Body style={tipo == "reserva" ? { width: "100%" } : { width: "8rem", height: "100%" }} className="d-flex flex-row flex-wrap align-items-flex-start p-2">
                    <Container className="d-flex flex-column justify-content-between">
                        <Row className="align-items-center">
                            <Col>
                                <Card.Subtitle className="d-flex flex-nowrap align-items-center"> Categoria
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        color2={'#ffd700'}
                                        value={(7 + apiData.id) / 2}
                                        className="m-1" />
                                </Card.Subtitle>
                                <Card.Title className="text-start">{apiData.nome ?? "carregando"}</Card.Title>
                            </Col>
                            <Col md={4}>
                                <h6 className="d-flex flex-column align-items-end">
                                    <Badge className="m-0 p-2">{7 + apiData.id}</Badge> Muito bom
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start md-auto">
                                <FaMapMarkerAlt /> {apiData.cidades.nome ?? "Não registrado ainda"}
                            </Col>
                        </Row>
                        {tipo != 'reserva' ? <> <Row className="text-start">
                            <Col className="d-flex gap-2">
                                {apiData.carateristicas.map((item, index) => {
                                    return (
                                        <span key={item.id + `${index}`}>{icons[item.icone]}</span>
                                    )
                                })}
                            </Col>
                        </Row></> : null}
                        <Row className="d-flex flex-column">
                            <Col>
                                <Card.Text className="text-truncate" style={{ WebkitLineClamp: '2' }}>{apiData.descricao}</Card.Text>
                            </Col>
                            <Link to={`/produto/${apiData.id}`} className="button p-2 text-decoration-none" >Ver mais</Link>
                        </Row>
                    </Container>
                </Card.Body>
            </Card >
    )
}

export default CustomCard;