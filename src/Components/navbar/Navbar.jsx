import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo_Db_1.png"
import useAuth from "../../Hooks/useAuth";
import './navbar.css'
const Navbar = () => {
    const { hasUser, setHasUser, logoutUser } = useAuth();
    return (
        <div className='navContainer'>
            <div className='logoSlogan'>
                <Link className={`nav-link`} to={'/home'}><img src={Logo} alt='Logo do Site' title='Logo do Site' /></Link>
                <Link className={`nav-link`} to={'/home'}><span className='slogan'><b><h3>Seu hotel dos sonhos por um preço real</h3></b></span></Link>
            </div>
            <div className='navItems'>
                {hasUser?  null: <Link className="navButton" to={'/cadastro'}>Criar Conta</Link>}
                {hasUser ? <Link className="navButton" onClick={logoutUser}>Logout</Link>
                    :
                    <a href="/login" className="navButton" >Login</a>}

            </div>
        </div>
    )
}

export default Navbar