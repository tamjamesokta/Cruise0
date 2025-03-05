import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const VerifyEmail = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState(false); // Track email verification
  const [isPolling, setIsPolling] = useState(true); // To track if polling is active

  const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN; // Use environment variable for Auth0 domain

  useEffect(() => {
   

    if (user.email_verified) {
      navigate('/'); // If email is already verified, redirect to home
      return;
    }

    const checkEmailVerification = async () => {
      if (user && !user.email_verified) {
        try {
          const token = await getAccessTokenSilently();
          const response = await fetch(
            `${auth0Domain}/api/v2/users/${user.sub}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const updatedUser = await response.json();

          if (updatedUser.email_verified) {
            setEmailVerified(true); // Email verified
            navigate('/'); // Redirect to the home page after verification
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    if (user && !user.email_verified && isPolling) {
      const intervalId = setInterval(checkEmailVerification, 5000); // Poll every 5 seconds

      // Cleanup the polling when email is verified or user navigates away
      return () => {
        clearInterval(intervalId);
        setIsPolling(false); // Stop polling when component unmounts or email is verified
      };
    }
  }, [user, isAuthenticated, navigate, getAccessTokenSilently, isPolling, auth0Domain]);

  return (
    <div>
      <h1>Verify Your Email</h1>
      <p>We've sent you an email. Please verify your email to continue.</p>
      {emailVerified && <p>Your email has been verified! Redirecting...</p>}
      {!emailVerified && !isPolling && <p>There was an issue checking your email status. Please try again later.</p>}
    </div>
  );
};

export default VerifyEmail;
