import { useReducer } from "react";

const AvaTimes = () => {
const updateTime = (state, action) => {
    if (action.type==="buy") return {money: state.money+10}
}
    const initialTimes = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    const [state, dispatch] = useReducer (updateTime, initialTimes)
    return (
        <>
            <select>{times}:00</select>
            <button onClick={() => dispatch({type:"buy"})}>Buy</button>
        </>
    )
};

export default AvaTimes ;