import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";


export const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <>
                <h2>No hay items en el carrito </h2>
                <Link to='/'>Productos</Link>
            </>
        )
    }

    return (
        <>
            {cart.map(p => <CartItem {...p} />)}
            <h3>Total: {total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to='/checkOut'>CheckOut</Link>
        </>
    )
}
