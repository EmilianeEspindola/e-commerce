import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../styles/Header.css';

function Header(){
    return(
        <nav className="bg-maincolor nav">
            <div className="logo">
                <Link to="/">
                    <img src="/img/logo-branca.png" alt="Logo Tea Bloom" title="Logo Tea Blooom"/>
                </Link>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Chás</a></li>
                    <li><a href="#">Infusões</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Ofertas</a></li>
                </ul>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faUser}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faCartShopping}/></a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;