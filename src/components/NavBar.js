import React from "react";
import logo from "../assets/images/Logo.png"
import ShoppingBag from "../assets/images/ShoppingBag.ico"


const NavBar = () => {

    return (
        <header style={styles.headerContainer}>
            <img style={styles.headerLogoImage} src={logo} alt="Logo Image" />
            <nav style={styles.headerNav}>
                <ul style={styles.headerNavUl}>
                    <li style={styles.headerNavUlLi}><a style={styles.headerNavUlLiA} href="#">Inicio</a></li>
                    <li style={styles.headerNavUlLi}><a style={styles.headerNavUlLiA} href="#">Productos</a></li>
                    <li style={styles.headerNavUlLi}><a style={styles.headerNavUlLiA} href="#">Quienes somos?</a></li>
                </ul>
            </nav>
            <img  style={styles.headerShoppingBag}  src={ShoppingBag} alt="Logo Cart" />
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
    },

    headerShoppingBag: {
        width: '1.9%',
        margin: '2%'
    }
    
}

export default NavBar;