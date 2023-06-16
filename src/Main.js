import React from "react";

const Main = () => {
    return(
    <main>
        <h2 className="title">Specials</h2>
        <button className="button">Online Menu</button>
        <div className="card card_left">
            <img className="food_photo" src="greek salad.jpg" alt="greek salad" />
            <h3>Greek salad</h3>
            <p className="price">$12.99</p>
            <p className="text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <a href="/order">Order a delivery</a>
            <img className="bike" src="bicycle.png" alt="delivery"/>
        </div>
        <div className="card card_center">
            <img className="food_photo" src="Screenshot_1.png" alt="bruchetta" />
            <h3>Bruchetta</h3>
            <p className="price">$ 5.99</p>
            <p className="text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <a href="/order">Order a delivery</a>
            <img className="bike" src="bicycle.png" alt="delivery"/>
        </div>
        <div className="card card_right">
            <img className="food_photo" src="lemon dessert.jpg" alt="lemon dessert" />
            <h3>Lemon Dessert</h3>
            <p className="price">$ 5.00</p>
            <p className="text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="/order">Order a delivery</a>
            <img className="bike" src="bicycle.png" alt="delivery"/>
        </div>
    </main>
    )
}

export default Main;