import './header.css'
import DatePicker from 'react-datepicker'
import { useContext, useState } from 'react'
import ReactStars from 'react-stars'
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi'
import { useEffect } from 'react';
import Calendario from '../detalhesProduto/Calendario';
import { useRef } from 'react';
import useListaProdutos from '../../Hooks/useListaProdutos';

const Header = ({ tipo, localizacaoProduto, nomeProduto, nomeCategoria }) => {
    const ref = useRef(null);
    const [busca, setBusca] = useState({nome: '' });
    const { loading, cidades, getProdutoPorCidade } = useListaProdutos();
    const [dados, setDados] = useState(cidades)



    const handleBusca = (campo, valor) => {
        setBusca(prevDados => ({ ...prevDados, [campo]: valor }))
    }
    useEffect(() => {
        if (tipo != "Produto" && !loading) {
            cidades.filter((item) => {
                return item.nome.includes(busca.nome.toLowerCase() || busca.nome.toUpperCase())
            }).map((item) => {
                setDados([...dados, item])
                
            })
        }


    }, [busca])
    return (
        tipo != "Produto" && !loading ?
            <div className='header' >
                <h1 className='hText'>Buscar ofertas em hotéis, casas e muitos mais</h1>
                <form action="hForm" className='hForm'>
                    <input className="header-input" list='cityList' placeholder='Onde Vamos?' ref={ref} onChange={e => { handleBusca('nome', e.target.value) }} />
                    <datalist id='cityList' className='cityList'>
                        {cidades.map((item, index) => {
                            if (index < 6 || busca.nome) {
                                return (<option key={item.id} value={item.nome} />)
                            }
                        })}
                    </datalist>
                    <Calendario inline={false} />
                    <button className="button" onClick={e=>{e.preventDefault(), getProdutoPorCidade(ref.current.value.toString(), ref.current.value= '')}}>Buscar</button>

                </form>
            </div>
            :
            <div className='header produto justify-content-start'>
                <div className="categoriaProduto">
                    <h5 className='nomeCategoria'>{nomeCategoria ?? "carregando"}</h5>
                    <h2 className='nomeProduto'>{nomeProduto ?? "carregando"}</h2>
                </div>

                <div className="subInfos">
                    <div className="localizacaoInfo ms-5">
                        <FaMapMarkerAlt style={{ width: '10px', height: '14px', margin: '10px 2px' }} />
                        <p style={{ margin: '5px' }}>{localizacaoProduto ?? "carregando"}</p>
                    </div>
                    <div className="classificacaoInfo">
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'}
                        />
                    </div>

                </div>
                <div className='d-flex gap-3 ms-5 mt-2' style={{ height: '30px', alignSelf: 'start' }}>
                    <FiShare2 />
                    <FaRegHeart />
                </div>
            </div>




    )
}

export default Header;