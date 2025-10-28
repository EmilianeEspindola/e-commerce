import { ProductSession } from "../components/ProductSession";
import { ReviewCard } from '../components/ReviewCard';
import { reviews } from "../data/reviews";
import { sessions } from '../data/sessions';
import '../styles/Home.css';
import '../styles/Review.css';

export function Home() {
    return (
        <div>
            <div className="banner">
                <div className="banner-content">
                    <h1>Lançamentos</h1>
                    <p>Novos sabores para melhorar o seu dia!</p>
                    <button className="banner-button">Descubra</button>
                </div>
            </div>
            <div>
                <ProductSession
                        title={sessions.maisVendidos.title}
                        button={sessions.maisVendidos.button}
                        products={sessions.maisVendidos.products}
                />
                <ProductSession
                        title={sessions.ofertas.title}
                        button={sessions.ofertas.button}
                        products={sessions.ofertas.products.map(product=>({...product, onSale: true}))}
                        // O Spread (...) mantém as demais propriedades, alterando somente a onSale para true.
                />
            </div>
            <div className="division-line-home"></div>
            <div className="review-session">
                <h1>Avaliações</h1>
                <div className="review-list">
                    {reviews.map((review, index)=>(
                        <ReviewCard 
                            key={index}
                            title={review.title}
                            message={review.message}
                            people={review.people}
                            address={review.address}
                            stars={review.stars}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}