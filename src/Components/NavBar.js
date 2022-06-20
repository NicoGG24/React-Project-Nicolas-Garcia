import React from "react";
import logo from '../assets/ecommercelogo.png';
import cartlogo from '../assets/cart36.png'
import './NavBar.css'


const NavBar = () => {

    return (
        <nav>
            <img src={logo} alt="logo" className="logoecommerce" />
            <li>
                <a href="#">Categoria 1</a>
                <a href="#">Categoria 2</a>
                <a href="#">Categoria 3</a>
            </li>
            <a href="#" className="cartlogo"><img src={cartlogo} alt="" /></a>
        </nav>
    )
}

export default NavBar;