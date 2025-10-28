import '../styles/ProductSession.css';

export function ProductSession({title, button, products}){
    return(
        <div className="product-session">
            <h2 className="session-title">{title}</h2>
            
            <div className="product-list">
                {products.map((product, index)=>(
                    <ProductCard
                        key={index}
                        img={product.img}
                        imgAlt={product.imgAlt}
                        imgTitle={product.imgTitle}
                        name={product.name}
                        smallDescription={product.smallDescription}
                        price={product.price}
                        discountPrice={product.discountPrice}
                        onSale={product.onSale}
                        valueSale={product.valueSale}
                    />
                ))}
            </div>
            
            <div className="class-button">
                <button className="session-button">{button}</button>
            </div>
        </div>
    )
}

function ProductCard({img, imgAlt, imgTitle, name, smallDescription, price, discountPrice, onSale, valueSale}){
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
                        <h3 className="old-price">{price}</h3>
                        <h3 className="new-price">{discountPrice}</h3>
                    </div>
                    </>
                ) : (
                    <h3 className="product-price">{price}</h3>
                )}
            </div>

            <button className="product-button">Adicionar ao Carrinho</button>
        </div>
    )
}