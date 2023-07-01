import React from "react";
import { Link } from "react-router-dom";

const MenuCard = (props) => {
    return (
            <div className="card">
                <img className="food_photo" src={props.img} alt={props.name} />
                <h3>{props.name}</h3>
                <p className="price">{props.price}</p>
                <p className="text">{props.text}</p>
                <Link to="/order" className="orderButton">Order a delivery</Link>
                <img className="bike" src="bicycle.png" alt="delivery"/>
            </div>
    )
}

export default MenuCard;