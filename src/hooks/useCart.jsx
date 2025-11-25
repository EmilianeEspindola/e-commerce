import { useState } from "react";
import { useCartStorage } from "./useCartStorage";

export function useCart() {
    const { cart, updateStorage, addToCart, removeItem, updateQuantity} = useCartStorage();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [cep, setCep] = useState("");
    const frete = 9.90;
    const total = subtotal + frete;

    const handleCep = (value) => setCep(value);

    return{
        cart,
        subtotal,
        frete,
        total,
        cep,
        handleCep,
        removeItem,
        updateQuantity,
        addToCart
    };
}