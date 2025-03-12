import React from 'react';
import ReactDOM from 'react-dom/client'; // Change from 'react-dom' to 'react-dom/client'
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: redirectUri,
    }}
    onRedirectCallback={(appState) => {
      const { isAuthenticated, user } = useAuth0();  // Get user data after authentication
  
      if (isAuthenticated && user) {
        if (user.email_verified) {
          // Redirect to the dashboard if the email is verified
          navigate('/');
        } else {
          // Redirect to email verification page if the email is not verified
          navigate('/Verify');
        }
      } else {
        // If not authenticated, redirect to login
        navigate('/');
      }
    }}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
