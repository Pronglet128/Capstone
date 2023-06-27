import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Menu from "./Menu";
import About from "./About";
import Order from "./Order";
import Login from "./Login";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Confirm from "./ConfirmedBooking";

const Nav = () => {
    return(
    <nav>
        <div className="navbar">
            <Link to="/"><img src="Screenshot_2.png" alt="logo"/></Link>
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
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservation" element={<BookingPage />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/succsess" element={<Confirm />}></Route>
        </Routes>
    </nav>
    )
}

export default Nav;