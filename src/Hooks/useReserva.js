import { useContext } from "react";
import { ReservaContext } from "../Contextos/ReservaContextProvider";

function useReserva() {
    const context = useContext(ReservaContext)
    return context
}

export default useReserva;