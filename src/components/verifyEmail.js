// VerifyEmail.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const VerifyEmail = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the landing page if not authenticated
      navigate('/');
    } else {
      // Poll the backend or check periodically if the email is verified
      const checkEmailVerification = async () => {
        if (user && !user.email_verified) {
          const token = await getAccessTokenSilently();
          const response = await fetch(`https://james-test-43934.cic-demo-platform.auth0app.com/api/v2/users/${user.sub}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const updatedUser = await response.json();

          if (updatedUser.email_verified) {
            navigate('/'); // Redirect to the landing page after email is verified
          }
        }
      };

      // Start polling every 3 seconds
      const intervalId = setInterval(checkEmailVerification, 3000);

      // Clean up interval when the email is verified
      return () => clearInterval(intervalId);
    }
  }, [isAuthenticated, user, navigate, getAccessTokenSilently]);

  return (
    <div>
      <h1>Verify Your Email</h1>
      <p>We've sent you an email. Please verify your email to continue.</p>
    </div>
  );
};

export default VerifyEmail;
