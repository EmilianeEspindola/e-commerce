import { useCart } from "../hooks/useCart";
import { useImageChanger } from "../hooks/useImageChanger"
import { useTabs } from "../hooks/useTabs"
import { ProductSession } from "../components/ProductSession";
import '../styles/ProductPage.css';

export function ProductPage( {product, session} ) {
    if (!product) return <p>Produto não encontrado!</p>

    return (
        <div>
            <div className="product-container">
                <div className="container-images">
                    <ProductImages images={product.images} />
                </div>
                <div className="container-infos">
                    <ProductInfo product={product} />
                </div>
            </div>
            <ProductTabs
                tabs={[
                    {title: "Descrição", content: product.description},
                    { title: "Ingredientes", content: product.ingredients},
                    { title: "Modo de Preparo", content: product.preparation}
                ]}
            />
            {session && (
                <div>
                    <ProductSession
                        title={session.title}
                        button={session.button}
                        products={session.products}
                    />
                </div>
            )}
        </div>
    )
}

function ProductImages({ images }){
    const { mainImage, selectImage } = useImageChanger(images);

    return (
        <div className="product-images">
            <div className="miniature-image">
                {images.map((img, i) => (
                    <img key={i} src={img} alt={`Produto ${i}`} onClick={() => selectImage(img)} />
                ))}
            </div>
            <div className="main-image">
                <img src={mainImage} alt="Produto Principal" />
            </div>
        </div>
    );
}

function ProductInfo({ product }) {
    const { addToCart } = useCart();

    const finalPrice = product.onSale ? product.discountPrice : product.price;

    function handleAdd() {
        addToCart({
            id: product.id,
            name: product.name,
            img: product.images[0],
            price: finalPrice,
            quantity: 1
        })
    }

    return (
        <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.details}</p>
            <h3>R${finalPrice.toFixed(2).replace('.',',')}</h3>
            <div className="buttons">
                <button onClick={handleAdd}>Adicionar ao Carrinho</button>
                <button>Comprar Agora</button>
            </div>
        </div>
    );
}

function ProductTabs({ tabs }) {
  const { activeIndex, selectTab } = useTabs(0);

  return (
    <div className="product-tabs">
      <div className="tabs-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => selectTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        <p>{tabs[activeIndex].content}</p>
      </div>
    </div>
  );
}