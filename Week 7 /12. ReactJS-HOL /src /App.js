import React, { useState } from 'react';
import './App.css';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Flight Ticket Booking</h1>
        {isLoggedIn ? (
          <LogoutButton onLogout={handleLogout} />
        ) : (
          <LoginButton onLogin={handleLogin} />
        )}
      </header>
      <main>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

export default App;
