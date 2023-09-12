import './detalhesProduto.css'
import DatePicker from 'react-datepicker'
import { Fragment, useState } from 'react'
import useIcons from '../../Hooks/useIcons'
import Calendario from './Calendario'
import { Link } from 'react-router-dom'

function DetalhesProduto({ apiData }) {
    const [dataRange, setDataRange] = useState([null, null])
    const [dataInicio, dataFim] = dataRange;
    const filterPastDates = date => {
        return date >= new Date();
    };
    const { icons } = useIcons();
    return (
        <>

            <div className="tituloDescricao text-start m-5">
                <p className="tituloProduto">{apiData.categorias.descricao}</p>
                <p className="descricaoProduto">{apiData.descricao} </p>
            </div>
            <div className="caracteristicasContainer text-start m-5">
                <p className="tituloProduto border-bottom">O que esse lugar oferece?</p>
                <div className="caracteristicas">
                    {apiData.carateristicas.map((item) => {
                        return (
                            <span key={item.icone}>
                                {icons[item.icone]}
                                <p>{item.nome}</p>
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="datasPossiveisContainer text-start">
                <p className="tituloProduto ms-5 ">Datas possíveis</p>
                <div className="d-flex justify-content-evenly datasDisponiveis m-0" >
                    <div className="calendario"><Calendario inline={true}></Calendario></div>
                    <div className="cardReserva d-flex flex-column p-4">
                        <p>Adicione as datas da viagem para obter preços exatos</p>
                        <Link to="reserva" className='button'>Iniciar reserva</Link>
                    </div>
                </div>
            </div>
            <div className="mapaContainer text-start ">
                <p className="tituloProduto ms-5 border-bottom">Onde você vai estar?</p>
            </div>
            <div className="infosContainer text-start">
                <p className="tituloProduto ms-5 border-bottom">O que você precisa saber</p>
                <div className="infos d-flex flex-nowrap gap-5">
                    <div className="regras">
                        <p className="tituloInfo">Regras</p>
                        <p className="infoItem">Proibido fumar</p>
                        <p className="infoItem">Reservas somente até 19:00</p>
                    </div>
                    <div className="saudeSeguranca">
                        <p className="tituloInfo">Saúde e segurança</p>
                        <p className="infoItem">Portas de Evacuação</p>
                        <p className="infoItem">Quartos higienizados antes e após uso</p>
                        <p className="infoItem">Pensamos na ergonomia de nossos clientes</p>
                    </div>
                    <div className="cancelamento">
                        <p className="tituloInfo">Política de cancelamento</p>
                        <p className="infoItem">Reembolso de 50% até 2 dias antes</p>
                        
                    </div>
                </div>

            </div>


        </>
    );
}

export default DetalhesProduto;