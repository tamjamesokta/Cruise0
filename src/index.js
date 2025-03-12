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
      const navigate = useNavigate(); // Initialize navigate

      const { isAuthenticated, user } = useAuth0();

      if (isAuthenticated && user && !user.email_verified) {
        navigate('/Verify');
      } else {
        navigate('/');
      }
    }}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
