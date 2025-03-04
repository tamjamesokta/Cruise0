import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; // Correct usage of useNavigate for React Router v6
import logo from '../images/cruiselogo.jpg'; // Import your logo image
import './Navbar.css';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate(); // Correct usage of useNavigate for React Router v6

  useEffect(() => {
    // Redirect to verify-email page if email is not verified after login/signup
    if (isAuthenticated && user && !user.email_verified) {
      navigate('/verify-email'); // Redirect to verify-email if not verified
    }
  }, [isAuthenticated, user, isLoading, navigate]);

  const handleLogin = () => {
    // Redirect to verify-email page for first-time sign-up
    loginWithRedirect({
      redirect_uri: 'https://cruise0-iota.vercel.app/verify-email' // Use your waiting page as redirect URL
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Cruise Booker Logo" className="navbar-logo" />
        <h1>Cruise0</h1>
      </div>
      <div className="navbar-right">
        {!isAuthenticated ? (
          <button onClick={handleLogin} className="btn-login">
            Login
          </button>
        ) : (
          <button onClick={() => logout({ returnTo: window.location.origin })} className="btn-logout">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
