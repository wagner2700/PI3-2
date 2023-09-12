import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import './galeriaImages.css'
import { createRef, useRef, useState } from 'react'

function GaleriaModal({ show, hide, mockImages }) {
    const [imagemAtual, setImagemAtual] = useState("https://s2.glbimg.com/Lyn4Dsz8pcFHsj1S41ir1WFBP9o=/smart/e.glbimg.com/og/ed/f/original/2019/12/04/hoteis-praia-lindos-brasil9.jpg");
    const a = {a:"b", c:"d"}
    
    const handleChangeImage= (e)=>{
        const handleChange = e.currentTarget.src
        setImagemAtual(handleChange)
    }
    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Image src={imagemAtual} fluid />
            </Modal.Body>
            <Modal.Footer className=''>
                <div className="imagens d-flex flex-row flex-nowrap gap-3">
                    {mockImages.map((img, index)=>{
                        return(
                            <Image src={img.urlImage?? img} key={img.id?? index} onClick={(e)=>{ handleChangeImage(e)}}/>
                        )
                    })}
       
                </div>
            </Modal.Footer>

        </Modal>
    );
}

export default GaleriaModal;