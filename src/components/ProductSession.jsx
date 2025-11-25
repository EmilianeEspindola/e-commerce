import { useCart } from '../hooks/useCart';
import '../styles/ProductSession.css';

export function ProductSession({title, button, products}){
    return(
        <div className="product-session">
            <h2 className="session-title">{title}</h2>
            
            <div className="product-list">
                {products.map((product, index)=>(
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
            
            <div className="class-button">
                <button className="session-button">{button}</button>
            </div>
        </div>
    )
}

function ProductCard({ id, img, imgAlt, imgTitle, name, smallDescription, price, discountPrice, onSale, valueSale }) {
    const { addToCart } = useCart();

    const finalPrice = onSale ? discountPrice : price;

    function handleAdd() {
        addToCart({ id, img, imgAlt, imgTitle, name, smallDescription, price, discountPrice, onSale, valueSale, quantity: 1 });
    }
    
    return(
        <div className={`product-card ${onSale ? 'on-sale' : ''}`}>
            {onSale && <span className="sale">{valueSale}</span>}
            <div className="product-img-container">
                <img src={img} alt={imgAlt} title={imgTitle} className="product-image"/>
            </div>
            <h1 className="product-title">{name}</h1>
            <p className="product-description">{smallDescription}</p>

            <div>
                {onSale ? (
                    <>
                    <div className="price-container">
                        <h3 className="old-price">R${price}</h3>
                        <h3 className="new-price">R${discountPrice}</h3>
                    </div>
                    </>
                ) : (
                    <h3 className="product-price">R${price}</h3>
                )}
            </div>

            <button className="product-button" onClick={handleAdd}>Adicionar ao Carrinho</button>
        </div>
    )
}