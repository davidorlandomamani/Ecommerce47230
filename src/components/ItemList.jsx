import { Item } from "./Item";

export const ItemList = ({ products }) => {

    return (
        <>
            {products.map((product) => <Item product={product} key={product.id + "_productList"} />)}
        </>)

}


