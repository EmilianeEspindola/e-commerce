import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Review.css';

export function ReviewCard({title, message, people, address}){
    const stars = 5; // Fixa as estrelas em 5. Tentar desenvolver do jeito certo.
    return(
        <div className="review-card">
            <div className="review-stars">
                {[...Array(stars)].map((_,i)=>(
                    <FontAwesomeIcon key={i} icon={faStar} />
                ))}
            </div>
            <h2 className="review-title">{title}</h2>
            <p className="review-msg">{message}</p>
            <p className="review-people">{people}</p>
            <p className="review-address">{address}</p>
        </div>
    )
}