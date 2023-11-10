import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Timestamp, writeBatch, getFirestore, doc, getDoc, collection, getDocs, where, documentId, query, addDoc } from "firebase/firestore"
import { CheckoutForm } from "./CheckoutForm"



export const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
        const db = getFirestore()

        const batch = writeBatch(db)

        const outOfStock = []

        console.log("hola1")

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const prodAddFromFirestone = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = prodAddFromFirestone

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const prodAddToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = prodAddToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })

            }
            else {
                outOfStock.push({ id: doc.id, ...dataDoc })
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            setOrderId(orderAdded.id)
            clearCart()
        }

    }
    if (orderId) {
        return (<h2>El id de su orden es: {orderId}</h2>);
    }
    return (
        <>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </>
    )

}