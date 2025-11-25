import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../styles/Header.css';

export function Header(){
    return(
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="/img/logo-branca.png" alt="Tea Bloom" title="Tea Blooom"/>
                </Link>
            </div>
            <nav className="main-menu">
                <ul>
                    <li><Link to="/product">Chás</Link></li>
                    <li><Link to="/product">Infusões</Link></li>
                    <li><Link to="/product">Acessórios</Link></li>
                    <li><Link to="/product">Lançamentos</Link></li>
                    <li><Link to="/product">Ofertas</Link></li>
                </ul>
            </nav>
            
            <div className="menu-right">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..."/>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </div>
                <ul>
                    <li><Link to="/login"><FontAwesomeIcon icon={faUser}/></Link></li>
                    <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                </ul>
            </div>
        </header>
    )
}