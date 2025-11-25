import { Link } from "react-router-dom";
import { useShowPassword } from "../hooks/useShowPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/CreateAccount.css';

export function CreateAccount(){
    const password = useShowPassword();
    const repeatPassword = useShowPassword();

    return(
        <>
        <div className="account-container">
            <div className="account-box">
                <Link to="/">
                    <img src="/img/logo-cinza.png" alt="Tea Bloom" className="login-logo"></img>
                </Link>
                <h2>Criar Conta</h2>
                <form action="" method="post">
                    <fieldset className="form-fieldset">
                        <legend> Dados Pessoais </legend>
                        <div>
                            <label for="name">Nome Completo *</label>
                            <input type="text" name="name" id="name" required/>
                        </div>
                        <div className="form-group-3">
                            <div>
                                <label for="cpf">CPF *</label>
                                <input type="text" name="cpf" id="cpf" required placeholder="000.000.000-00" maxlength="14"/>
                            </div>
                            <div>
                                <label for="phone">Celular *</label>
                                <input type="tel" name="phone" id="phone" required placeholder="(00) 00000-0000" maxlength="15"/>
                            </div>
                            <div>
                                <label for="birthday">Nascimento</label>
                                <input type="date" name="birthday" id="birthday"/>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-fieldset">
                        <legend> Acesso </legend>
                        <div>
                            <label for="email">E-mail *</label>
                            <input type="email" name="email" id="email" required placeholder="usuario@email.com.br"/>
                        </div>
                        <div className="form-group-2">
                            <div className="input-senha">
                                <label htmlFor="password">Senha *</label>
                                <input
                                    type={password.showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    required
                                />
                                <span
                                    className="password-icon"
                                    onClick={password.changeVisibility}
                                >
                                    <FontAwesomeIcon icon={password.icon}/>
                                </span>
                            </div>
                            <div className="input-senha">
                                <label htmlFor="repeatpassword">Repetir Senha *</label>
                                <input
                                    type={repeatPassword.showPassword ? "text" : "password"}
                                    name="repeatpassword"
                                    id="repeatpassword"
                                    required
                                />
                                <span
                                    className="password-icon"
                                    onClick={repeatPassword.changeVisibility}
                                >
                                    <FontAwesomeIcon icon={repeatPassword.icon}/>
                                </span>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-fieldset">
                        <legend> Endereço </legend>
                        <div>
                            <label for="cep">CEP *</label>
                            <input type="text" name="cep" id="cep" required placeholder="00000-000" maxlength="9"/>
                        </div>
                        <div>
                            <label for="address">Endereço *</label>
                            <input type="text" name="address" id="address" required/>
                        </div>
                        <div className="form-group-2">
                            <div>
                                <label for="number-address">Número</label>
                                <input type="text" name="number-address" id="number-address" maxlength="10"/>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" name="sem-numero" id="sem-numero"/>
                                <label for="sem-numero">Sem Número</label>
                            </div>
                        </div>
                        <div>
                            <label for="complemento">Complemento</label>
                            <input type="text" name="complemento" id="complemento"/>
                        </div>
                        <div>
                            <label for="bairro">Bairro *</label>
                            <input type="text" name="bairro" id="bairro" required/>
                        </div>
                        <div className="form-group-2">
                            <div>
                                <label for="uf">Estado *</label>
                                <select name="uf" id="uf">
                                    <option value="">Selecione...</option>
                                    <option value="PR">PR</option>
                                </select>
                            </div>
                            <div>
                            <label for="city">Cidade *</label>
                            <select name="city" id="city">
                                <option value="">Selecione...</option>
                                <option value="CoronelVivida">Coronel Vivida</option>
                                <option value="PatoBranco">Pato Branco</option>
                                <option value="Vitorino">Vitorino</option>
                            </select>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-fieldset">
                        <legend>Entrega</legend>
                        <div className="form-group-2">
                            <div>
                                <label for="metodo-entrega">Método</label>
                                <div className="radio-group">
                                    <div>
                                        <input type="radio" name="metodo-entrega" id="normal" value="n"/>
                                        <label for="normal">Normal</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="metodo-entrega" id="expresso" value="e"/>
                                        <label for="expresso">Expresso</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="metodo-entrega" id="retirada" value="r"/>
                                        <label for="retirada">Retirar em loja</label>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <label for="hora-entrega">Horário Preferencial</label>
                                <input type="time" name="hora-entrega" id="hora-entrega"/>
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <button type="submit" >Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}