import { products } from "./products";

export const sessions = {
    maisVendidos: {
        title: "Mais Vendidos",
        button: "Ver Todos",
        products: [products.curcumaLatte, products.morangoFresh, products.guaranaBeauty, products.cheesecake]
    },
    ofertas: {
        title: "Ofertas",
        button: "Ver Todas",
        products: [products.curcumaLatte, products.morangoFresh, products.tiramisu, products.cheesecake]
    },
    produtosRelacionados: {
        title: "Produtos Relacionados",
        button: "Ver Mais",
        products: [products.curcumaLatte, products.morangoFresh, products.guaranaBeauty]
    },
    vocePodeGostar: {
        title: "Você Pode Gostar",
        button: "Ver Mais",
        products: [products.curcumaLatte, products.morangoFresh] 
    }
}