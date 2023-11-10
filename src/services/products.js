import { products } from "../mock/products"
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'

export const getProducts = () => {
    return new Promise(resolve => {
        const db = getFirestore()
        const collRef = collection(db, "products")
        getDocs(collRef).then((snapshot) => {
            resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        });
    })

}

export const getProduct = (idFound) => {
    return new Promise(resolve => {
        const db = getFirestore()
        const itemRef = doc(db, "products", idFound)

        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                resolve({ id: snapshot.id, ...snapshot.data() })
            }
        })
    })

}

/*
export const getProduct = (idFound) => {
    const db = getFirestore()
    const itemRef = doc(db, "products", idFound)


    getDoc(itemRef).then((snapshot) => {
        const prod= undefined;
        if (snapshot.exists()) {
            prod = { id: snapshot.id, ...snapshot.data() }
        }
        return(prod);
    })
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
*/

export const getProductsCategory = (idFound) => {
    return new Promise(resolve => {
        const db = getFirestore()
        const collRef = collection(db, "products")
        getDocs(collRef).then((snapshot) => {
            const prods = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            const productsCategory = prods.filter(prod => prod.categoriaId === idFound);
            resolve(productsCategory);
        });
    })

}
