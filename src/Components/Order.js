import BookingForm from "./BookingForm";
import React, { useState, useCallback } from 'react';
function Order() {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <div>
      <BookingForm  onChange={onChange}/>
      <input type="date" id="res-date" value={value} onChange={onChange}/>
      {/* <p>The value is: {value} </p> */}
    </div>
  );
}

export default Order;