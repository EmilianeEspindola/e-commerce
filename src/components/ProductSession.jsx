import '../styles/ProductSession.css';
import ProductCard from './ProductCard';

function ProductSession({title, button, products}){
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
                        title={product.title}
                        description={product.description}
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
export default ProductSession;