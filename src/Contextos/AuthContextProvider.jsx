import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});


function AuthContextProvider({ children }) {
    const [hasUser, setHasUser] = useState();
    const [dadosUsuarios, setDadosUsuario] = useState()
    const logoutUser = () => {
        setHasUser(false)
        return localStorage.removeItem("token")
    }
    const getUserData = async (token) => {
        try {
            const response = await axios.get(`http://localhost:8091/usuario/${token}`)
            console.log(response.data)
            setDadosUsuario(response.data)
            console.log(dadosUsuarios)
        } catch (error) {
            console.log(error)

        }
    }
  
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setHasUser(true)
            getUserData(token)
        }
    }, [hasUser])
    return (
        <AuthContext.Provider value={{ hasUser, setHasUser, logoutUser, dadosUsuarios, setDadosUsuario }}>{children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;