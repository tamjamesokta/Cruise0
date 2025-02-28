// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to Cruise Booking!</h2>} />
        <Route 
          path="/book" 
          element={
            <PrivateRoute>
              <BookingForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
