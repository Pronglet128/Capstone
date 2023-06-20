import React from "react";
import { Link } from "react-router-dom";
import data from "../MenuData";
import MenuCard from "./MenuCard";

let left = 0;
let center = 1;
let right = 2;

const Main = () => {
    return(
    <main>
        <h2 className="title">Specials</h2>
        <button className="button"><Link to="/menu">Online menu</Link></button>
        <div className="card_left">
            <MenuCard
                key={data[left].key}
                price={data[left].price}
                img={data[left].img}
                name={data[left].name}
                text={data[left].text}
            />
        </div>
        <div className="card_center">
            <MenuCard
                key={data[center].key}
                price={data[center].price}
                img={data[center].img}
                name={data[center].name}
                text={data[center].text}
            />
        </div>
        <div className="card_right">
            <MenuCard
                key={data[right].key}
                price={data[right].price}
                img={data[right].img}
                name={data[right].name}
                text={data[right].text}
            />
        </div>
    </main>
    )
}

export default Main;