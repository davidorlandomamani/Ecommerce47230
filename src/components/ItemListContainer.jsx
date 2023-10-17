import { Link, useParams } from "react-router-dom";
import { getProducts } from '../services/products'
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {
    const { categoryId } = useParams();

    const tituloCategoria = categoryId ? categoryId : "Productos de todas las categorias";
    //console.log(categoryId)

    return (
        <div>
            <h1>{tituloCategoria}</h1>
            <ItemList />
        </div>
    )
}

