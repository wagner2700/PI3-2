import axios from "axios";
import { useState } from "react";
import "./cadastroForm.css"
function CadastroForm() {
    const [dados, setNovosDados] = useState({});

    const salvarDados = (campo, valor) => {

        setNovosDados(prevDados => ({ ...prevDados, [campo]: valor }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8091/usuario/cadastrar", dados);
            console.log(res.data);
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };
    
    

    return (

        <form className="form-container">
            <div className="nameContent">
                <label htmlFor="nome">
                    Nome
                    <input type='text' onChange={e => salvarDados('nome', e.target.value)} />
                </label>
                <label htmlFor="sobrenome">
                    Sobrenome
                    <input type='text' onChange={e => salvarDados('sobrenome', e.target.value)} /></label>
            </div>
            <label htmlFor="email">
                Email
                <input type='email' onChange={e => salvarDados('email', e.target.value)} />
            </label>

            <label htmlFor="senha">
                Senha
                <input type='password' onChange={e => salvarDados('senha', e.target.value)} />
            </label>

            <label htmlFor="repetirSenha">
                Repetir Senha
                <input type='password' />
            </label>
            <button className="button" onClick={e => handleSubmit(e)}>Enviar</button>


        </form>

    );
}

export default CadastroForm;