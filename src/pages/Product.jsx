import { products } from '../data/products';
import { sessions } from '../data/sessions';
import { ProductPage } from '../components/ProductPage';

export function Product(){
    const product = products.curcumaLatte; // Usando um produto fixo para página estática, momentaneamente.
    const session = sessions.produtosRelacionados;

    return(
        <ProductPage
            product={product}
            session={session}
        />
    )
}