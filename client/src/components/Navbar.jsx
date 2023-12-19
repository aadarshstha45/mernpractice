import { NavLink } from "react-router-dom"
import './Navbar.css';

export const Navbar = () => {

    return(
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">Aadarsh</a>
                    </div>

                    <nav>
                        <ul>
                            <li><a to="/about" className="decor">About</a>  </li>
                            <li><NavLink to="/contact">Contact</NavLink>  </li>
                            <li><NavLink to="/login">Login</NavLink>  </li>
                            <li><NavLink to="/register">Register</NavLink>  </li>
                        </ul>

                    </nav>
                </div>
            </header>
        </>
    )
}
