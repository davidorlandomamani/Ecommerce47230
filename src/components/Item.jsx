import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
    return (
        <div className="card">
            <img src={product.pictureUrl} className="card-img" />
            <div className="container">
                <h4><b>{product.title}</b></h4>
                <Link to={`/item/${product.id}`}>ver mas detalle</Link>
            </div>
        </div>
    );
}