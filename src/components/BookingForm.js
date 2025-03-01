import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking for ${destination} on ${date}`);
  };

  return (
    <div className="booking-wrapper">
    <div className="booking-container">
      <h2>Book Your Cruise</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Destination:</label>
        <input 
          type="text" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
          placeholder="Enter destination" 
        />
        <label>Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <button type="submit" className="btn-book">Book Now</button>
      </form>
    </div>
  </div>
);
};

export default BookingForm;
