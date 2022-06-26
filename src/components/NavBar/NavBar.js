import React from "react";
import logo from "../../assets/images/Logo.png"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

//Cargo mis items del Nav
const navItems = [
{
    id: 0,
    label: "Inicio"
},
{
    id: 1,
    label: "Productos"
},
{
    id: 2,
    label: "Quienes somos?"
}

];

const NavBar = () => {

    return (
        <header className="headerContainer">
            <img className="headerLogoImage" src={logo} alt="Logo Image" />
            <nav className="headerNav">
                <ul className="headerNavUl">
                    {navItems.map((item) => (<li className="headerNavUlLi" key={item.id}><a className="headerNavUlLiA" href="#" >{item.label}</a></li>))}
                </ul>
            </nav>
            <CartWidget />
        </header>
    );

}

export default NavBar;