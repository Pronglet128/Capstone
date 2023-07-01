import { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm"

const AvaTimes = () => {

    let firstDay = new Date().getDate()

    const [curDay, setCurDay] = useState('')

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date);

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const initializeTimes = fetchAPI(firstDay);
    const updateTime = (availableTimes, action) => {
        if (action.type==="new") return availableTimes = fetchAPI(new Date(curDay).getDate())
    }

    const [availableTimes, dispatch] = useReducer (updateTime, initializeTimes)

    const handleChange = (value) => {
        setCurDay(value);
        dispatch({type: "new"});
      }

    console.log(availableTimes)

    const listItems = availableTimes.map(result =>
         <option key={result}>{result}</option>)

    return (
         <>
            <BookingForm dateChange={handleChange}
             listItems = {listItems} />
        </>
    )
};

export default AvaTimes