import { Link } from "react-router-dom";
import { useShowPassword } from "../hooks/useShowPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Login.css';

export function Login(){
    const { inputType, icon, changeVisibility } = useShowPassword();

    return(
        <div className="login-container">
            <div className="login-box">
                <Link to="/">
                    <img src="/img/logo-cinza.png" alt="Tea Bloom" className="login-logo"></img>
                </Link>
                <h2>Login</h2>

                <form action="" method="post">
                    <div className="input-email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="contato@email.com.br" required/>
                    </div>

                    <div className="input-password">
                        <label htmlFor="password">Senha</label>
                        <div className="password-input-eye">
                            <input
                                type={inputType}
                                name="password"
                                id="password"
                                placeholder="Digite a senha..."
                                required
                            />
                            <span
                                className="password-icon"
                                onClick={changeVisibility}>
                                <FontAwesomeIcon icon={icon}/>
                            </span>
                        </div>
                        <a href="#" className="forgot-password">Esqueceu a senha?</a>
                    </div>

                    <button type="submit" className="btn">Entrar</button>
                    
                    <div className="remember">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Lembrar-me</label>
                    </div>

                    <div className="division-line-login" />
                    
                    <p className="create-account">Não tem uma conta?</p>
                    <Link to="/createaccount">
                        <button type="button" className="btn">Criar Conta</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}