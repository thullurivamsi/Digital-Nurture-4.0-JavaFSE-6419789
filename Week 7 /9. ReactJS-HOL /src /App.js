import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css';

// Main App Component
const App = () => {
  // Flag variable to control which component to display
  const [flag, setFlag] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Cricket App - ReactJS HOL
          </h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFlag(true)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                flag 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              List of Players (Flag = true)
            </button>
            <button
              onClick={() => setFlag(false)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                !flag 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Indian Players (Flag = false)
            </button>
          </div>
        </div>
      </nav>

      {/* Conditional rendering based on flag - Simple if else */}
      {flag ? <ListofPlayers /> : <IndianPlayers />}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>Cricket App demonstrating ES6 features: map(), arrow functions, destructuring, and spread operator</p>
      </footer>
    </div>
  );
};

export default App;
