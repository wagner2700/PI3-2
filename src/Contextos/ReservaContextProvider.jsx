import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ReservaContext = createContext({})

function ReservaContextProvider({children }) {
    const [reserva, setReserva] = useState({})


    const sendData = ( dadosReserva) => {
        try {
            const response = axios.post('http://localhost:8091/reservas', dadosReserva)
            setReserva(response)
            console.log(reserva)

        } catch (error) {

        }
    }
    
    return (
        <ReservaContext.Provider value={{ reserva, sendData }}>{children}</ReservaContext.Provider>

    );
}

export default ReservaContextProvider;