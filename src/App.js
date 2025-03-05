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

    // If the user is authenticated, check their email verification status
    if (user) {
      if (!user.email_verified) {
        // If email is not verified, redirect to the email verification waiting page
        navigate('/verify-email');
      } else {
        // If email is verified, you can proceed to the home page or desired page
        navigate('/');
      }
    }

    // Handle logout scenario if the user is authenticated but refreshes
    if (!isAuthenticated) {
      // Logout and navigate back to the home page or login page
      logout({ returnTo: window.location.origin });
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
