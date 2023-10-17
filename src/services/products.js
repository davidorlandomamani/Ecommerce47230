import { products } from "../mock/products"

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                products
            )
        }, 3000);
    });
}

export const getProduct = (idFound) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = products.find(prod => prod.id == idFound);
            resolve(producto);
        }, 100)
    })
}

export const getProductsCategory = (idFound) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.categoriaId === idFound);
            resolve(productsCategory);
        }, 100)
    })
}
