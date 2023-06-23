const AvailableTimes = (props) => {
    const times = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
    const nowTime = new Date().getHours()
    const result = [];
    let i=0;
        if (props.day === new Date().toISOString().substring(0, 10)) {
            while (times[i] > nowTime) {
                let element = times[i]+":00";
                result.push(
                    <option key={times[i]}>{element}</option>
                )
                    i=i+1;
            };
            return (<option>Booking not available for today</option>)
        }
        else {
                for (let i=0; i < times.length; i++) {
                    let element = times[i]+":00";
                    result.push(
                        <option key={times[i]}>{element}</option>
                    )
                };
        };
    return (
        <>
            {result.reverse()}
        </>
    )
};

export default AvailableTimes;