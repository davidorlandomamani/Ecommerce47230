import { ItemCount } from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from 'react';

export const ItemDetail = ({ id, categoriaId, title, description, pictureUrl, stock, price }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handledOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {id, title, price}
        addItem(item,quantity)
    }

    return (
        <>
            <div key={id + "_productList"} className="card">
                <div className="container">
                    <img src={pictureUrl} alt="" className="card-img" />
                    <h4>
                        nombre: {title}
                    </h4>
                    <h4>
                        descripcion: {description}
                    </h4>
                    <h4>
                        precio: {price}
                    </h4>
                    <h4>
                        stock: {stock}
                    </h4>
                    <h4>
                        categoria: {categoriaId}
                    </h4>
                </div>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' > Terminar compra
                        </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
                    )
                }
            </div>
        </>
    )
}








