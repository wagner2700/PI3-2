import { Modal } from 'bootstrap';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import useAuth from '../../Hooks/useAuth';
import useReserva from '../../Hooks/useReserva';
import Calendario from "../detalhesProduto/Calendario";


function ReservaForm({cidade}) {
    const [dados, setDados] = useState();
    const {reserva, sendData} = useReserva();
    const {dadosUsuarios} = useAuth();
    
    return (
        <>{dadosUsuarios? 
            <>
            <h2 className='mt-5' style={{textAlign: "left"}}>Complete seus dados</h2>
            <Form
                style={{ width: "min(100% - 15px, 847px)", height: "217px", textAlign: 'left' }}
                className="d-flex flex-wrap bg-white gap-4 shadow rounded mt-3 p-3 justify-content-center"
            >
                <Form.Group style={{ width: "40%" }}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder={dadosUsuarios.nome?? "Logar para reservar"}/>
                </Form.Group>
                <Form.Group style={{width: "40%" }}>
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control type="text" placeholder={dadosUsuarios.sobrenome?? "Logar para reservar"} />
                </Form.Group>
                <Form.Group style={{width: "40%" }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder={dadosUsuarios.email?? "Logar para reservar"} />
                </Form.Group>
                <Form.Group style={{width: "40%" }}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder={cidade?? "Logar para reservar"} />
                </Form.Group>
            </Form>
            </>
        :
        <Modal> <h2></h2></Modal>
        
        }
      
        </>

    );
}

export default ReservaForm;