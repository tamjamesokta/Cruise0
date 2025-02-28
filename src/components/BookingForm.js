// src/components/BookingForm.js

import React, { useState } from 'react';

const BookingForm = () => {
  const [selectedCruise, setSelectedCruise] = useState('');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking Details:', bookingDetails);
    console.log('Selected Cruise:', selectedCruise);
    alert('Booking Successful!');
  };

  return (
    <div>
      <h3>Select Your Cruise</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={bookingDetails.name}
            onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={bookingDetails.email}
            onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
            required
          />
        </label>
        <label>
          Choose Cruise:
          <select value={selectedCruise} onChange={(e) => setSelectedCruise(e.target.value)} required>
            <option value="">Select a Cruise</option>
            <option value="Caribbean Cruise">Caribbean Cruise</option>
            <option value="Mediterranean Cruise">Mediterranean Cruise</option>
            <option value="Alaskan Cruise">Alaskan Cruise</option>
          </select>
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
