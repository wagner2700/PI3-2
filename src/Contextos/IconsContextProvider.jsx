import { createContext } from "react";
import 'react-icons/fa'
import { FaCarSide, FaCartArrowDown, FaConciergeBell, FaCookieBite, FaDumbbell, FaSpa, FaStreetView, FaSwimmingPool, FaTemperatureLow, FaUmbrellaBeach, FaWifi, FaWineGlassAlt } from "react-icons/fa";

export const IconsContext = createContext({})
const icons = {
    cozinha: <FaCookieBite />,
    "wi-fi": <FaWifi />,
    climatizado: <FaTemperatureLow />,
    piscina: <FaSwimmingPool />,
    lazerFesta: <FaWineGlassAlt />,
    estacionamento: <FaCarSide />,
    praia: <FaUmbrellaBeach />,
    mercados: <FaCartArrowDown />,
    academia: <FaDumbbell />,
    spa: <FaSpa />,
    gourmet: <FaConciergeBell />,
    vista: <FaStreetView />
}

function IconsContextProvider({children}) {
    return (
        <IconsContext.Provider value={{icons}}>
            {children}
        </IconsContext.Provider>

    );
}

export default IconsContextProvider;