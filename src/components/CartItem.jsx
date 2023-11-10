import React from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartItem = ({ id, price, quantity, title }) => {

    const { clearCart } = useContext(CartContext)

    console.log(title)
    return (
        <div>
            {title} {price} {quantity}
            <button onClick={() => clearCart()}>eliminar</button>

        </div>
    );
}