import { useParams, Link } from "react-router-dom";
import { getProduct } from '../services/products'
import { products } from "../mock/products";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailsContainer = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProduct(id).then((Response) => {
            setProduct(Response);
        });
    }, [id]);

    return (
        <>
            <ItemDetail {...product} />
        </>)

}


