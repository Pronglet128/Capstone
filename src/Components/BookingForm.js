import { useState } from "react";
import AvailableTimes from "./availableTimes";
import AvaTimes from "./AvalTime";
import Confirm from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";

const BookingForm=() => {
    var moment = require('moment');
    const [name, setName] = useState("")
    const [curDay, setCurDay] = useState(moment().format('YYYY-MM-DD'))
    const [time, setTime] = useState("19:00")
    const [guests, setGuests] = useState("2")
    const [occasion, setOccasion] = useState("Dinner")

    const submitForm = (day) => {
        const submitAPI = (formData) => {
            if (formData) return true;
       };
       if (submitAPI) {
        navigate("/succsess");
        // <Confirm day={curDay} time={time} />
    }}

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm()
    }

    const handleChange = (event) => {
          setCurDay(event.target.value)
        //  onChange = event.target.value
    }

    const resName = document.getElementById('res-name');
    const resNameError = document.querySelector('#resName + span.error');
    window.addEventListener("DOMContentLoaded", (event) => {
        resName.addEventListener('input', function (event) {
            if (resName.validity.valid) {
                resNameError.textContent = '';
            } else {
                showError();
            }
        });

    function showError() {
        if(resName.validity.valueMissing) {
            resNameError.textContent = 'You need to enter a name.';
        } else if(resName.validity.tooShort) {
            resNameError.textContent = `Name should be at least ${ name.minLength } characters; you entered ${ name.value.length }.`;
        }
    }
    });

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-name">Enter your name*</label>
            <input
                type="text"
                id="res-name"
                value={name}
                onChange={event => setName(event.target.value)}
                required
                minLength="3"
                maxLength="24"
                placeholder="Your name"/>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={curDay} onChange={handleChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={event => setTime(event.target.value)}>
                {<AvailableTimes/>}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={event => setGuests(event.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={event => setOccasion(event.target.value)}>
                <option>Dinner</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="button" type="submit" value="Make Your reservation" />
        </form>
</>
    )
};

export default BookingForm;