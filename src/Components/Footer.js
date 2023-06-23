import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <img src="Screenshot_2.png" alt="logo"/>
        <>
            <ul>
            <h3 style={{paddingLeft:10}}>Navigation</h3>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservation</Link></li>
                <li><Link to="/order">Order online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </>
        <>
            <ul>
            <h3 style={{paddingLeft:10}}>Contact</h3>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
                <li><br></br></li>
                <li>Working hours:</li>
                <li>11:00 - 22:00</li>
            </ul>
        </>
        <>
            <ul>
            <h3 style={{paddingLeft:10}}>Social media links</h3>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
        </>
    </footer>
    )
}

export default Footer;