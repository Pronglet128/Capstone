import React from "react";

const Main = () => {
    return(
    <main>
        <h2 className="title">Specials</h2>
        <button className="button">Online Menu</button>
        <div className="card card_left">
            <img src="greek salad.jpg" alt="greek salad" />
            <h3>Greek salad</h3>
            <p>$12.99</p>
            <p className="text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <button>Order a delivery</button>
        </div>
        <div className="card card_center">
            <img src="Screenshot_1.png" alt="bruchetta" />
            <h3>Bruchetta</h3>
            <p>$ 5.99</p>
            <p className="text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <button>Order a delivery</button>
        </div>
        <div className="card card_right">
            <img src="lemon dessert.jpg" alt="lemon dessert" />
            <h3>Lemon Dessert</h3>
            <p>$ 5.00</p>
            <p className="text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button>Order a delivery</button>
        </div>
    </main>
    )
}

export default Main;