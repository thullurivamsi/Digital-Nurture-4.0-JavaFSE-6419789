import React from 'react';

const LoginButton = ({ onLogin }) => {
  return (
    <button className="login-button" onClick={onLogin}>
      Login
    </button>
  );
};

export default LoginButton;
