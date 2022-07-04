import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png"
import CartWidget from "../CartWidget/CartWidget";
import useProductCategories from "../../hooks/useNavBar";
import "./NavBar.css"

const navItems = [];

const NavBar = () => {

    //Cargo mis items del Nav
    const { getProductsCategories , navItems } = useProductCategories();


    useEffect( () => {
        getProductsCategories();
    }, []);

    return (
        <header className="headerContainer">
            <Link to="/" className="headerLogoLinkImage"><img className="headerLogoImage" src={logo} alt="Logo Image" /></Link>
            <nav className="headerNav">
                <ul className="headerNavUl">
                    {navItems.map((item) => (<li className="headerNavUlLi" key={item.id}><Link to={item.route} className="headerNavUlLiA">{item.label}</Link></li> ))}
                </ul>
            </nav>
            <CartWidget />
        </header>
    );

}

export default NavBar;