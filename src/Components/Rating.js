import React from "react";
import CostumersRating from "./RatingCard";

const reviews = [
    {
        rating: "5",
        img: "user1.png",
        name: "Alex",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, risus quis feugiat fringilla, dolor dui vestibulum lorem, non posuere lectus sem id magna. Maecenas ut nulla quis ligula efficitur pretium eu elementum mi. Donec tempor eget felis et convallis. "
    },
    {
        rating: "4",
        img: "user2.png",
        name: "Lora",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        rating: "4",
        img: "user3.png",
        name: "Mike",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, risus quis feugiat fringilla, dolor dui vestibulum lorem, non posuere lectus sem id magna. "
    },
    {
        rating: "5",
        img: "user4.png",
        name: "Jane",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, risus quis feugiat fringilla. "
    },
]

const Rating = () => {
    return(
    <section className="rating">
        <h2>Testemonials</h2>
        <div className="col">
            {reviews.map((review) => (
                <CostumersRating
                    key={review.name}
                    rating={review.rating}
                    img={review.img}
                    name={review.name}
                    text={review.text}
                />
            ))}
        </div>
    </section>
    )
}

export default Rating;