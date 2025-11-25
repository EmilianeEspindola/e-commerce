import { useState, useEffect } from "react";

export function useCartStorage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartStorage = localStorage.getItem('cart');
        if(cartStorage) setCart(JSON.parse(cartStorage));
    }, []);

    const updateStorage = (arrayCart) => {
        setCart(arrayCart);
        localStorage.setItem('cart', JSON.stringify(arrayCart));
    }

    const addToCart = (product) => {
        console.log('product', product);
        setCart(prev => {
            console.log(prev);
            const exists = prev.find(p => p.id === product.id);
            if (exists) {
                return prev.map(p =>
                    p.id === product.id ? {...p, quantity: p.quantity + 1} : p
                );
            }
            return [...prev, {...product, quantity: 1}];
        });
    };

    const removeItem = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, qty) => {
        if (qty <= 0) qty = 1;
        setCart(prev =>
            prev.map(item =>
                item.id === id ? {...item, quantity: qty} : item
            )
        );
    };
    return { cart, updateStorage, addToCart, removeItem, updateQuantity };
}