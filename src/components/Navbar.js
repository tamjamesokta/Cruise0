import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../images/cruiselogo.jpg'; // Import your logo image
import './Navbar.css';

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Cruise Booker Logo" className="navbar-logo" />
        <h1>Cruise0</h1>
      </div>
      <div className="navbar-right">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()} className="btn-login">
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
