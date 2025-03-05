import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate(); // For redirecting
  const location = useLocation(); // To track the current location (page) of the user

  useEffect(() => {
    // Wait until user data is loaded
    if (isLoading) return;

    // If the user is authenticated and their email is not verified
    if (user) {
      if (!user.email_verified) {
        // If the email is not verified, and the user is not on the /verify-email page
        if (location.pathname !== '/verify-email') {
          navigate('/verify-email');  // Redirect to the verify-email page
        }
      } else {
        // If the email is verified and the user is not on the home page
        if (location.pathname === '/verify-email') {
          navigate('/'); // Redirect to the home page after email verification
        }
      }
    }
  }, [isAuthenticated, user, isLoading, navigate, location]);

  return (
    <>
      {/* Only render Navbar, BookingForm, Destinations, and BottomNav if we're not on the /verify-email page */}
      {location.pathname !== '/verify-email' && (
        <>
          <Navbar />
          <Carousel />
          <BookingForm />
          <Destinations />
          <BottomNav />
        </>
      )}

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
        <Route path="/verify-email" element={<VerifyEmail />} />  {/* This is the standalone verify email page */}
      </Routes>
    </>
  );
};

export default App;
