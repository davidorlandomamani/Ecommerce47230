import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>Tienda de Bruno</h1>
            </div>
            <ul>
                <li>
                    <a href="#Formal" >Formal</a>
                </li>
                <li>
                    <a href="#Informal">Informal</a>
                </li>
                <li>
                    <a href="#Accesorios">Accesorios</a>
                </li>
                <li>
                    <a href="#Envios">Envios</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}