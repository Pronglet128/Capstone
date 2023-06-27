const AvailableTimes = (props) => {
    var moment = require('moment');
    const times = [22, 21, 20, 19, 18, 17]
    const nowDay = moment().format("YYYY-MM-DD")
    const nowTime = moment().hours()
    const result = [];
    let i=0;
        if (props.day === nowDay) {
            if (times[i] > nowTime) {
                while (times[i] > nowTime) {
                    if(Math.random() < 0.8) {
                        let element = times[i]+":00";
                        result.push(
                        <option key={element}>{element}</option>)
                    }
                    if(Math.random() < 0.5) {
                        let element = times[i]+":30";
                        result.push(
                        <option key={element}>{element}</option>)
                    }
                    i=i+1;
                };
                return result;
            }
            else {
                return (<option>Booking not available for today</option>)
            }
        }
        else {
                for (let i=0; i < times.length; i++) {
                    if(Math.random() < 0.8) {
                        let element = times[i]+":00";
                        result.push(
                        <option key={element}>{element}</option>)
                    }
                    if(Math.random() < 0.5) {
                        let element = times[i]+":30";
                        result.push(
                        <option key={element}>{element}</option>)
                    }
                };
        };
    return (
        <>
            {result.reverse()}
        </>
    )
};

export default AvailableTimes;