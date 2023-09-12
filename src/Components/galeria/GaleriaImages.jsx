import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";
import './galeriaImages.css'
import GaleriaModal from "./GaleriaModal";
const mockImages = ['https://imghotelrioquente.com.br/wp-content/uploads/2017/09/Fotos-do-IMG-Hotels-Rio-Quente-Hotel-em-Rio-Quente-111.jpg','https://www.momondo.com.br/rimg/himg/c9/7c/63/expediav2-400230-59caef-232312.jpg?width=720&height=576&crop=true',  'https://images.trvl-media.com/lodging/6000000/5450000/5448700/5448602/ee16eba2.jpg?impolicy=resizecrop&rw=500&ra=fit',  'https://images.trvl-media.com/lodging/6000000/5450000/5448700/5448602/ee16eba2.jpg?impolicy=resizecrop&rw=500&ra=fit', 'https://imghotelrioquente.com.br/wp-content/uploads/2017/09/Fotos-do-IMG-Hotels-Rio-Quente-Hotel-em-Rio-Quente-101.jpg']
  
   


function GaleriaImagens({ imagens }) {
  const [show, setShow] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     
      <Stack direction="horizontal" className="gap-3 ps-5 pt-5 pb-0 pe-5 mt-2" >
        <button className="verMais" onClick={handleShow}>Veja mais</button>
        <GaleriaModal show={show} hide={handleClose} mockImages={imagens?? mockImages} />
        <Row style={{ width: '50%' }} onClick={handleShow}>
          <Col style={{ width: '50%', height: '386px' }}>
            <img src={imagens[0].urlImage?? mockImages[0]} style={{ width: '100%', height: '100%' }} className="rounded" />
          </Col>
        </Row>
        <Row className="m-0" style={{ width: '50%', height: '386px' }} onClick={handleShow}>
          <Col className="d-flex flex-column gap-2" style={{ height: '386px' }} >
            {imagens.filter((item) => {
              return item.id % 2 == 0 && item.id < 5
            }).map((img, index) => {
              return <img src={img.urlImage?? mockImages[index]} key={img.id} style={{ width: '100%', height: '50%', }} className="rounded" />
            })}
          </Col>
          <Col className="d-flex flex-column gap-2" style={{ height: '386px' }} >
            {imagens.filter((item) => {
              return item.id % 2 != 0 && item.id < 5
            }).map((img, index) => {
              return <img src={img.urlImage?? mockImages[index]} key={img.id} style={{ width: '100%', height: '50%', }} className="rounded" />
            })}
          </Col>
        </Row>
      </Stack >
    </>
  );
}

export default GaleriaImagens;