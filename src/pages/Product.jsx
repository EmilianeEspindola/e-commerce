import { products } from '../data/products';
import { sessions } from '../data/sessions';
import { ProductPage } from '../components/ProductPage';
import { useParams } from 'react-router-dom';

export function Product(){
    const { id } = useParams();
    const product = Object.values(products).find(p => p.id === Number(id));
    const session = sessions.produtosRelacionados;

    if (!product) {
        return <p>Produto não encontrado!</p>
    }
    
    return(
        <ProductPage
            product={product}
            session={session}
        />
    )
}