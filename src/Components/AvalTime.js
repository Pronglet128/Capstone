import { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm"

const AvaTimes = (props) => {
    const previousDay = 0
    let currentDay = props.curDay

    const [value, setValue] = useState('')

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
        let random = seededRandom(new Date(date).getDate());

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
    // const submitAPI = function(formData) {
    //     return true;
    // };
    const initializeTimes = fetchAPI(currentDay);
    const updateTime = (availableTimes, action) => {
        if (action.type==="new") return availableTimes = fetchAPI(new Date(value).getDate())
    }
    const [availableTimes, dispatch] = useReducer (updateTime, initializeTimes)

    const handleChange = (value) => {
        setValue(value);
        dispatch({type: "new"});
      }

    // if (currentDay == previousDay) {
    //     return dispatch({type: "new"})
    //     }
    //     console.log(previousDay)
    //     console.log(currentDay)

    // console.log(availableTimes)

    const listItems = availableTimes.map(result =>
         <option key={result}>{result}</option>)

    return (
         <>
            <BookingForm onChange={handleChange}
             listItems = {listItems} />
        </>
    )
};

export default AvaTimes