import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav>
      <h1>Cruise Booking</h1>
      <ul>
        {!isAuthenticated ? (
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        ) : (
          <>
            <li>
              <span>Welcome, {user.name}</span>
            </li>
            <li>
              <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
