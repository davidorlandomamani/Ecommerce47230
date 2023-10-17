import { useState } from 'react';

export const ItemCount = ({ onAdd, initial, stock }) => {

    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
    };

    return (
        <>
            <button onClick={() => addProduct(-1)}
                disabled={qty === initial}
            >-</button>
            <span>{qty}</span>
            <button onClick={() => addProduct(+1)}
                disabled={qty === stock}
            >+</button>
            <button onClick={() => {
                onAdd(qty);
            }}
                disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </>
    )
}