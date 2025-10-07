import '../styles/ProductSession.css';

function ProductCard({img, imgAlt, imgTitle, title, description, price, discountPrice, onSale, valueSale}){
    return(
        <div className={`product-card ${onSale ? 'on-sale' : ''}`}>
            {onSale && <span className="sale">{valueSale}</span>}
            <div>
                <img src={img} alt={imgAlt} title={imgTitle} className="product-image"/>
            </div>
            <h1 className="product-title">{title}</h1>
            <p className="product-description">{description}</p>
            <div>
                {onSale ? (
                    <>
                    <div className="price-container">
                        <h3 className="old-price">{price}</h3>
                        <h3 className="new-price">{discountPrice}</h3>
                    </div>
                    </>
                ) : (
                    <h3 className="product-price">{price}</h3>
                )}
            </div>
            <button className="product-button">ADICIONAR AO CARRINHO</button>
        </div>
    )
}
export default ProductCard;