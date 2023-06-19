import React from "react";

const CostumersRating = (props) => {
    return (
        <div className="cell">
                <h2>{props.rating}<img src="255333.png" alt="star" width="35px" padding-left="15px"/></h2>
                    <div className="row">
                        <img src={props.img} alt="client_photo" className="user"/>
                        <h3>{props.name}</h3>
                    </div>
                <p>{props.text}</p>
        </div>
    )
}

export default CostumersRating;