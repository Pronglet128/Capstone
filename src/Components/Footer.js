import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <img src="Screenshot_2.png" alt="logo"/>
        <>
            <ul>
            <h3>Navigation</h3>
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
            <h3>Contact</h3>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </>
        <>
            <ul>
            <h3>Social media links</h3>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
            </ul>
        </>
    </footer>
    )
}

export default Footer;