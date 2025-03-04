import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Make sure BrowserRouter is imported

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
    {/* Wrap App component with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

reportWebVitals();
