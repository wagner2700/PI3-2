import CadastroForm from "../../Components/cadastroForm/CadastroForm";
import "./cadastro.css"

function Cadastro() {
    return ( 
        <div className="cadastro">
        <h2>Criar conta</h2>
        <CadastroForm/>
        </div>
     );
}

export default Cadastro;