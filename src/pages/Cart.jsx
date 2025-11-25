import { ProductSession } from "../components/ProductSession";
import { sessions } from '../data/sessions';
import { products } from '../data/products';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart";
import '../styles/Cart.css';

export function Cart() {
    const product = products.curcumaLatte;

    const {
        cart,
        subtotal,
        frete,
        total,
        cep,
        handleCep,
        removeItem,
        updateQuantity
    } = useCart();

    return(
        <div>
            <div className="cart-container">
            <h2>Carrinho</h2>
            <div className="cart-content">
                <div className="cart-products">
                    <div className="cart-products-header">
                        <span>Produto</span>
                        <span>Preço</span>
                    </div>

                    {cart.length === 0 && (
                        <p className="empty-car">Seu carrinho está vazio!</p>
                    )}

                    {cart.map(product => (
                        <div key={product.id} className="cart-product-item">
                            <img src={product.img} alt={product.imgAlt} title={product.imgTitle}></img>
                            <div className="cart-product-infos">
                                <h4>{product.name}</h4>
                                <div className="cart-item-qty">
                                    <input
                                        type="number"
                                        min="1"
                                        value={product.quantity}
                                        onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
                                    />
                                    <button
                                        className="delete-btn"
                                        onClick={() => removeItem(product.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                            <div className="cart-product-price">
                                <h4>R${(product.price * product.quantity).toFixed(2).replace('.',',')}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-resume">
                    <h3>Resumo</h3>
                    <div className="cart-resume-content">
                        <div className="resume-subtotal">
                            <span>Subtotal</span>
                            <span>R${subtotal.toFixed(2).replace(".", ",")}</span>
                        </div>
                        <div className="resume-frete">
                            <span>Frete</span>
                            <span>+ R${frete.toFixed(2).replace(".", ",")}</span>
                        </div>
                        <div className="cep">
                            <label>Entrega</label>
                            <div className="cep-input">
                                <label for="cep" className="cep-label">CEP</label>
                                <input
                                    id="cep"
                                    type="text"
                                    placeholder="85555-555"
                                    value={cep}
                                    onChange={(e) => handleCep(e.target.value)}
                                />
                                <button className="ok-btn">Ok</button>
                            </div>
                            <p className="cep-help">Não sei o CEP</p>
                        </div>
                        <div className="resume-total">
                            <span>Total</span>
                            <span>R${total.toFixed(2).replace(".", ",")}</span>
                        </div>
                        <button className="buy-btn">Finalizar Compra</button>
                    </div>
                </div>
            </div>
            </div>
            <ProductSession
                title={sessions.vocePodeGostar.title}
                button={sessions.vocePodeGostar.button}
                products={sessions.vocePodeGostar.products}
            />
        </div>
    )
}