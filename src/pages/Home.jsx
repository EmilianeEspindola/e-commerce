import Releases from "../components/Releases";
import ProductSession from "../components/ProductSession";

export function Home(){
    const sessions = [
        {
            title: 'Mais Vendidos',
            button: 'VER TODOS',
            products: [
                {
                    img: "/img/cha-morango-fresh.JPG",
                    imgAlt: "Chá Branco Morango Fresh",
                    imgTitle: "Chá Branco Morango Fresh",
                    title: "Chá Branco Morango Fresh - 100g",
                    description: "Chá leve e de sabor refrescante.",
                    price: "R$185,00"
                },
                {
                    img: "/img/cha-guarana-beauty.JPG",
                    imgAlt: "Chá Verde Guaraná Beauty",
                    imgTitle: "Chá Verde Guaraná Beauty",
                    title: "Chá Verde Guaraná Beauty - 100g",
                    description: "Chá energizante e antioxidante.",
                    price: "R$135,80"
                },
                {
                    img: "/img/tcha-tiramisu.JPG",
                    imgAlt: "Chá Vermelho Tiramisu",
                    imgTitle: "Chá Vermelho Tiramisu",
                    title: "Chá Vermelho Tiramisu - 100g",
                    description: "Chá aconchegante e saboroso.",
                    price: "R$115,00"
                },
                {
                    img: "/img/cha-cheesecake.JPG",
                    imgAlt: "Chá Preto Cheesecake",
                    imgTitle: "Chá Preto Cheesecake",
                    title: "Chá Preto Cheesecake - 100g",
                    description: "Chá vibrante e com cremosidade.",
                    price: "R$111,20"
                },
                {
                    img: "/img/infusao-abobora-feliz.JPG",
                    imgAlt: "Infusão Abóbora Feliz",
                    imgTitle: "Infusão Abóbora Feliz",
                    title: "Infusão Abóbora Feliz - 100g",
                    description: "Infusão vitamínica e super saborosa.",
                    price: "R$91,70"
                },
                {
                    img: "/img/infusao-pessego-selvagem.JPG",
                    imgAlt: "Infusão Pêssego Selvagem",
                    imgTitle: "Infusão Pêssego Selvagem",
                    title: "Infusão Pêssego Selvagem - 100g",
                    description: "Infusão rica em antioxidantes e nutrientes",
                    price: "R$115,00"
                }
            ],
        },
        {
            title: 'Ofertas',
            button: 'VER TODAS',
            products: [
                {
                    img: "/img/cha-morango-fresh.JPG",
                    imgAlt: "Chá Branco Morango Fresh",
                    imgTitle: "Chá Branco Morango Fresh",
                    title: "Chá Branco Morango Fresh - 100g",
                    description: "Chá leve e de sabor refrescante.",
                    price: "R$185,00",
                    discountPrice: "R$175,75",
                    onSale: true,
                    valueSale: "- 5%"
                },
                {
                    img: "/img/cha-guarana-beauty.JPG",
                    imgAlt: "Chá Verde Guaraná Beauty",
                    imgTitle: "Chá Verde Guaraná Beauty",
                    title: "Chá Verde Guaraná Beauty - 100g",
                    description: "Chá energizante e antioxidante.",
                    price: "R$135,80",
                    discountPrice: "R$122,22",
                    onSale: true,
                    valueSale: "- 10%"
                },
                {
                    img: "/img/tcha-tiramisu.JPG",
                    imgAlt: "Chá Vermelho Tiramisu",
                    imgTitle: "Chá Vermelho Tiramisu",
                    title: "Chá Vermelho Tiramisu - 100g",
                    description: "Chá aconchegante e saboroso.",
                    price: "R$115,00",
                    discountPrice: "R$109,25",
                    onSale: true,
                    valueSale: "- 5%"
                },
                {
                    img: "/img/cha-cheesecake.JPG",
                    imgAlt: "Chá Preto Cheesecake",
                    imgTitle: "Chá Preto Cheesecake",
                    title: "Chá Preto Cheesecake - 100g",
                    description: "Chá vibrante e com cremosidade.",
                    price: "R$111,20",
                    discountPrice: "R$100,08",
                    onSale: true,
                    valueSale: "- 10%"
                },
                {
                    img: "/img/infusao-abobora-feliz.JPG",
                    imgAlt: "Infusão Abóbora Feliz",
                    imgTitle: "Infusão Abóbora Feliz",
                    title: "Infusão Abóbora Feliz - 100g",
                    description: "Infusão vitamínica e super saborosa.",
                    price: "R$91,70",
                    discountPrice: "R$87,12",
                    onSale: true,
                    valueSale: "- 5%"
                },
                {
                    img: "/img/infusao-pessego-selvagem.JPG",
                    imgAlt: "Infusão Pêssego Selvagem",
                    imgTitle: "Infusão Pêssego Selvagem",
                    title: "Infusão Pêssego Selvagem - 100g",
                    description: "Infusão rica em antioxidantes e nutrientes",
                    price: "R$103,50",
                    discountPrice: "R$93,15",
                    onSale: true,
                    valueSale: "- 10%"
                }
            ],
        },

    ];
    return(
        <div>
            <Releases />
            <div>
                {sessions.map((session, index)=>(
                    <ProductSession
                        key={index}
                        title={session.title}
                        button={session.button}
                        products={session.products}
                    />
                ))}
                
            </div>
        </div>
    )
}