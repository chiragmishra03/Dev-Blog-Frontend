import React from 'react';
import './Error.scss'; // Import a CSS file for styling

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">404 Error</h1>
      <p className="error-message">Oops! Page not found.</p>
      <p className="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  );
}

export default Error;
