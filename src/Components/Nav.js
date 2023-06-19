import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Main from "./Main";
import About from "./About";
import Booking from "./Booking";
import Order from "./Order";
import Login from "./Login";
import Homepage from "./Homepage";

const Nav = () => {
    return(
    <nav>
        <div className="navbar">
            <img src="Screenshot_2.png" alt="logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservation</Link></li>
                <li><Link to="/order">Order online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Main />}></Route>
            <Route path="/reservation" element={<Booking />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </nav>
    )
}

export default Nav;