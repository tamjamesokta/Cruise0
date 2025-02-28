import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import PrivateRoute from './components/PrivateRoute';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import BottomNav from './components/BottomNav';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Global Styles

const App = () => {
  return (
    <Router>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content Sections */}
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <div className="home-container">
              <div className="welcome-section">
                <h2>Welcome to Cruise Booking!</h2>
                <p>Your journey begins here. Book your dream cruise today!</p>
              </div>
              <Carousel />
              
            </div>
          } 
        />

        {/* Booking Route (Protected) */}
        {/* <Route 
          path="/book" 
          element={
            <PrivateRoute>
              <div className="booking-section">
                <h2>Book Your Cruise</h2>
                <BookingForm />
              </div>
            </PrivateRoute>
          } 
        /> */}


      </Routes>

      <BookingForm />

      {/* Recommended Destinations Section (Always visible) */}
      <Destinations />
      
      {/* Bottom Navbar Section (Always visible) */}
      <BottomNav />
    </Router>
  );
};

export default App;
