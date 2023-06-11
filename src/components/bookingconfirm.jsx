import React from 'react';
import './bookingconfirm.css'



function BookingConfirmation({ onBookAnother, onDone }) {
  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Your booking has been successfully confirmed.</p>
      <div className="buttons">
        <button onClick={onBookAnother}>Book Another</button>
        <button onClick={onDone}>Done</button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
