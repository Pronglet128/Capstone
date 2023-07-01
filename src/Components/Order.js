import BookingForm from "./BookingForm";
import React, { useState, useCallback } from 'react';

function Order() {

  return (
    <>
      <h2 className="h2_pages">Your basket:</h2>
      <p className="p_pages" style={{paddingBottom: 140}}>Your basket is empty</p>
      <br></br>
    </>
  );
}

export default Order;