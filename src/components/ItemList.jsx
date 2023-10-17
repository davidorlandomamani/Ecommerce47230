import { useParams, Link } from "react-router-dom";
import { getProducts, getProductsCategory } from '../services/products'
import { products } from "../mock/products";
import { useEffect, useState } from "react";


export const ItemList = () => {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const get = categoryId ? getProductsCategory : getProducts;

        get(categoryId).then((Response) => {
            setProducts(Response);
        });
    }, [categoryId]);

    return (
        <>
            {products.map((product) => {
                return (
                    <div key={product.id + "_productList"} className="card">
                        <img src={product.pictureUrl} alt={product.title} className="card-img" />
                        <div className="container">
                            <h4><b>{product.title}</b></h4>
                            <Link to={`/item/${product.id}`}>ver mas detalle</Link>
                        </div>
                    </div>
                );
            })}
        </>)

}


