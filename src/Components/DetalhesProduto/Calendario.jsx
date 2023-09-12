import { CalendarContainer } from "react-datepicker";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import './calendario.css';

function Calendario({ inline }) {
    const [dataRange, setDataRange] = useState([null, null])
    const [dataInicio, dataFim] = dataRange;
    const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth)
    const filterPastDates = date => {
        return date >= new Date();
    };
    useEffect(() => {
        const handleResize = () =>{
            setTamanhoTela(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        console.log(tamanhoTela)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>

            <DatePicker
                // className='datePicker m-0'
                showIcon
                selectsRange
                selected={dataInicio}
                startDate={dataInicio}
                endDate={dataFim}
                dateFormat="dd/MM/yyyy"
                monthsShown={tamanhoTela >= 1100? 2: 1}
                onChange={update => { setDataRange(update), console.log(dataRange) }}
                filterDate={filterPastDates}
                inline={inline}
                calendarClassName="m-2 shadow border-0"



            />
        </>
    )

}

export default Calendario;