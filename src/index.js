import React from 'react';
import ReactDOM from 'react-dom/client';  // Change from 'react-dom' to 'react-dom/client'
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI;

// Create a root container for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the 'render' method to render the app inside the root
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: redirectUri,
    }}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
