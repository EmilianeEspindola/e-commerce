import '../styles/Newsletter.css';

export function Newsletter(){
    return(
        <div className="newsletter">
            <div className="newsletter-text">
                <h2>Receba promoções e novidades</h2>
                <p>Informe seu e-mail para cadastrar-se e receber nossas novidades e promoções em primeira mão!</p>
            </div>
            <form action="" method="" className="newsletter-form">
                <label htmlFor="newsletter-email" className="sr-only">E-mail</label>
                <input type="email" id="newsletter-email" name="newsletter-email" placeholder="E-mail" required/>
                <button type="submit">Inscrever-se</button>
            </form>
        </div>
    )
}