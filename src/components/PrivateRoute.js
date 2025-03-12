
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated && !user?.email_verified) {
    return <Navigate to="/Verify" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
