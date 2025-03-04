import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import BottomNav from './components/BottomNav';
import VerifyEmail from './components/verifyEmail';  // Import the VerifyEmail component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Global Styles
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate(); // For redirecting

  useEffect(() => {
    // Wait until user data is loaded
    if (isLoading) return;

    // If the user is authenticated but their email is not verified, log them out
    if (isAuthenticated && user && !user.email_verified) {
      logout({ returnTo: window.location.origin }); // Logs the user out and redirects them to the home page or login page
      navigate('/verify-email');
    }
  }, [isAuthenticated, user, isLoading, navigate, logout]);

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content Sections */}
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="home-container">
              <div className="welcome-section">
                <Carousel />
              </div>
            </div>
          } 
        />
        <Route path="/verify-email" element={<VerifyEmail />} />  {/* Add this route */}
      </Routes>

      <BookingForm />
      <Destinations />
      
      {/* Bottom Navbar Section (Always visible) */}
      <BottomNav />
    </>
  );
};

export default App;
