import { useState } from "react"

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const handleConfirm = (event) => {
        event.preventDefault()
        const userData =
        {
            name, phone, email
        }
        onConfirm(userData);
    }

    return (
        <>
            <form onSubmit={handleConfirm}>
                nombre
                <input type='text' value={name} onChange={({ target }) => setName(target.value)}></input>
                <br />
                telefono
                <input type='text' value={phone} onChange={({ target }) => setPhone(target.value)}></input>
                <br />
                email
                <input type='text' value={email} onChange={({ target }) => setEmail(target.value)}></input>
                <br />
                <button type='submit'>Crear orden</button>
            </form>
        </>
    )
}