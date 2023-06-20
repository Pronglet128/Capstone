import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return(
    <header>
        <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button><Link to="/reservation">Reserve a Table</Link></button>
        </article>
        <img src="food.jpg" alt="restaurant_food" width="375px"></img>
    </header>
    )
}
export default Header;