import { NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <div>
                    <NavLink to="/" ><img src="/img/logo.png" /></NavLink>
                </div>
                <li>
                    <NavLink to="/category/formal" >Formal</NavLink>
                </li>
                <li>
                    <NavLink to="/category/informal">Informal</NavLink>
                </li>
                <li>
                <NavLink to="/category/accesorios">Accesorios</NavLink>
                </li>
                
                <CartWidget />
            </ul>
        </nav>
    )
}