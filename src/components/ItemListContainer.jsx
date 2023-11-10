import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { getProducts, getProductsCategory } from '../services/products'
import { products } from "../mock/products";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const get = categoryId ? getProductsCategory : getProducts;

        get(categoryId).then((Response) => {
            setProducts(Response);
        });
    }, [categoryId]);

    const tituloCategoria = categoryId ? categoryId : "Productos de todas las categorias";

    return (
        <div>
            <h1>{tituloCategoria}</h1>
            <ItemList products={products} />
        </div>
    )
}

