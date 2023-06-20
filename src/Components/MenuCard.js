import React from "react";

const MenuCard = (props) => {
    return (
            <div className="card">
                <img className="food_photo" src={props.img} alt={props.name} />
                <h3>{props.name}</h3>
                <p className="price">{props.price}</p>
                <p className="text">{props.text}</p>
                <a href="/order" className="orderButton">Order a delivery</a>
                <img className="bike" src="bicycle.png" alt="delivery"/>
            </div>
    )
}

export default MenuCard;