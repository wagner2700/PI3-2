import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useTheme from "../../Hooks/useTheme";
import { useEffect, useState } from "react";



const LoginForm = () => {

  const {setDadosUsuario} = useAuth();
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [dados, setNovosDados] = useState({email: '', senha: ''});

  const salvarDados = (campo, valor) => {
    setNovosDados(prevDados => ({ ...prevDados, [campo]: valor }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8091/usuario/autenticar", dados);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/home'
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
    

  };
  const validateForm = () => {
    return dados.email.length >= 5 && dados.senha.length >= 5;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
    console.log(isButtonDisabled)
  }, [dados]);

  return (
    <div className={"dark"}>
      <h2>Iniciar sessão</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <label>Email
          <input
            name="username"
            type="email"
            onChange={e => { salvarDados('email', e.target.value) }}
            required
          />

        </label>
        <label >
          Senha
          <input
            name="password"
            type="password"
            onChange={e => { salvarDados('senha', e.target.value) }}
            required
          />
        </label>
        <button className="button" type="submit" disabled={isButtonDisabled} style={isButtonDisabled? {backgroundColor: '#5e9ba4', cursor: 'not-allowed'}: {backgroundColor: '#1dbeb4'}} >
          Entrar
        </button>
      </form>

    </div>
  );
};

export default LoginForm;
