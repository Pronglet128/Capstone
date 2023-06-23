import { useState } from "react";
import AvailableTimes from "./Components/availableTimes";


const BookingPage=() => {
    
    const [day, setDay] = useState(new Date().toISOString().substring(0, 10))
    const [time, setTime] = useState("19:00")
    const [guests, setGuests] = useState("2")
    const [occasion, setOccasion] = useState("Birthday")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // var moment = require('moment');
    // const nextDay = moment().add('days', 1).format('YYYY-MM-DD');

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={day} onChange={e => setDay(e.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                <AvailableTimes
                    day = {day}
                />
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={e => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="button" type="submit" value="Make Your reservation" />
        </form>
</>
    )
};

export default BookingPage;