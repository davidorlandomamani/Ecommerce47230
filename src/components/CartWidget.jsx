import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <div>
            <img src="/img/cart.png" width="39px" style={{ display: totalQuantity > 0 ? 'block' : 'none' }} />
            {totalQuantity}
        </div>
    )
}

