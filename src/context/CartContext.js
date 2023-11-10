import { createContext, useState } from "react";

export const CartContext = createContext(
    {
        cart: [],
        total: 0,
        totalQuantity: 0
    }
)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])

            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }
        else {
            const updatedCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }
    }

    const removeItem = (itemId) => {
        const deletedProduct = cart.find(prod => prod.item.id === itemId);
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)

        setTotalQuantity(prev => prev - deletedProduct.quantity);
        setTotal(prev => prev + (deletedProduct.price * deletedProduct.quantity));
    }

    const clearItem = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }
    return (
        < CartContext.Provider value={{ cart, total, totalQuantity, clearCart, addItem, removeItem, clearItem }}>
            {children}
        </CartContext.Provider >
    )
}

