import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import '../styles/Footer.css';

export function Footer(){
    return(
        <footer className="footer">
            <div className="footer-session">
                <Link to="/" className="footer-logo">
                    <img src="/img/logo-branca.png" alt="Logo Tea Bloom" title="Logo Tea Blooom"/>
                </Link>
                
                <div className="footer-social">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faYoutube}/></a></li>
                         <li><a href="#"><FontAwesomeIcon icon={faXTwitter}/></a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-session">
               <h2>Atendimento</h2>
                    <ul>
                        <li><a href="mailto:contato@teabloom.com.br"><FontAwesomeIcon icon={faEnvelope}/> contato@teabloom.com.br</a></li>
                        <li><a href="tel:+5541999887766"><FontAwesomeIcon icon={faWhatsapp}/> (41) 99988-7766</a></li>
                        <li><FontAwesomeIcon icon={faBusinessTime}/> Horários: Seg-Sex - 09-18h</li>
                    </ul>     
            </div>
                
            <div className="footer-session">
                <h2>Institucional</h2>
                <ul>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Nossa Loja</a></li>
                    <li><a href="#">Trabalhe Conosco</a></li>
                </ul> 
            </div>
                
            <div className="footer-session">
                <h2>Ajuda e Suporte</h2>
                <ul>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Trocas e Devoluções</a></li>
                    <li><a href="#">Termos de Serviço</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
            </div>
            <div className="footer-two">
                <p>© 2025 Tea Bloom - Chás Especiais - 11.222.333/0001-00 - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}