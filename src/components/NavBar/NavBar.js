import React from "react";
import logo from "../../assets/images/Logo.png"
import CartWidget from "../CartWidget/CartWidget";



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
        <header style={styles.headerContainer}>
            <img style={styles.headerLogoImage} src={logo} alt="Logo Image" />
            <nav style={styles.headerNav}>
                <ul style={styles.headerNavUl}>
                    {navItems.map((item) => (<li style={styles.headerNavUlLi} key={item.id}><a style={styles.headerNavUlLiA} href="#" >{item.label}</a></li>))}
                </ul>
            </nav>
            <CartWidget />
        </header>
    );

}

const styles = {
    headerContainer: {
        background: 'linear-gradient(to top right, #212326 43%, #505459 132%)',
        display: 'flex',
        alignItems: 'center'
    },
    
    headerLogoImage: {
        padding: 20,
        width: '7%'
    },

    headerNav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },

    headerNavUl: {
        display: 'flex',
        listStyleType: 'none'  
    },

    headerNavUlLi: {
        padding:  '0px 30px',
        fontFamily: '"Teko" , "Arial"',
        fontSize: '30px',
        letterSpacing: '2px'
    },

    headerNavUlLiA: {
        textDecoration: 'none',
        color: '#fff'
    }
    
}

export default NavBar;