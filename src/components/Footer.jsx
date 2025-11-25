import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faPix, faCcMastercard, faCcVisa, faCcAmex } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css';

export function Footer(){
    return(
        <footer className="footer">
            <div className="footer-session">
                <Link to="/" className="footer-logo"><img src="/img/logo-branca.png" alt="Logo Tea Bloom"/></Link>
                <div className="footer-social">
                    <ul>
                        <li><Link><FontAwesomeIcon icon={faInstagram}/></Link></li>
                        <li><Link><FontAwesomeIcon icon={faFacebook}/></Link></li>
                        <li><Link><FontAwesomeIcon icon={faYoutube}/></Link></li>
                        <li><Link><FontAwesomeIcon icon={faXTwitter}/></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-session">
               <h2>Atendimento</h2>
                    <ul>
                        <li><Link><FontAwesomeIcon icon={faEnvelope}/> contato@teabloom.com.br</Link></li>
                        <li><Link><FontAwesomeIcon icon={faWhatsapp}/> (41) 99988-7766</Link></li>
                        <li><FontAwesomeIcon icon={faBusinessTime}/> Horários: Seg-Sex - 09-18h</li>
                    </ul>     
            </div>  
            <div className="footer-session">
                <h2>Institucional</h2>
                <ul>
                    <li><Link>Quem Somos</Link></li>
                    <li><Link>Nossa Loja</Link></li>
                    <li><Link>Trabalhe Conosco</Link></li>
                </ul> 
            </div>  
            <div className="footer-session">
                <h2>Ajuda e Suporte</h2>
                <ul>
                    <li><Link>Perguntas Frequentes</Link></li>
                    <li><Link>Trocas e Devoluções</Link></li>
                    <li><Link>Termos de Serviço</Link></li>
                    <li><Link>Política de Privacidade</Link></li>
                </ul>
            </div>
            <div className="footer-two">
                <p>© 2025 Tea Bloom - Chás Especiais - 11.222.333/0001-00 - Todos os direitos reservados.</p>
                <div className="footer-payment">
                    <ul>
                        <li><FontAwesomeIcon icon={faPix}/></li>
                        <li><FontAwesomeIcon icon={faCcMastercard}/></li>
                        <li><FontAwesomeIcon icon={faCcVisa}/></li>
                        <li><FontAwesomeIcon icon={faCcAmex}/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}