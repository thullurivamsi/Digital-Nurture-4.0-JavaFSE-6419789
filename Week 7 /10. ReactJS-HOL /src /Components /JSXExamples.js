import React from 'react';

// Component demonstrating various JSX concepts
const JSXExamples = () => {
  // JavaScript expressions in JSX
  const currentYear = new Date().getFullYear();
  const appName = "Office Space Rental";
  const isLoggedIn = true;
  
  // Object for demonstration
  const user = {
    name: "John Doe",
    role: "Property Manager"
  };

  // Array for demonstration
  const features = [
    "Modern Workspaces",
    "High-Speed Internet", 
    "Meeting Rooms",
    "24/7 Security"
  ];

  // Inline CSS styles object
  const headerStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0
  };

  const listItemStyle = {
    backgroundColor: '#e8f4fd',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '5px',
    borderLeft: '4px solid #3498db'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. JSX Element Creation */}
      <div style={headerStyle}>
        <h1>JSX Examples in {appName}</h1>
        <p>Demonstrating React JSX Features</p>
      </div>

      {/* 2. JavaScript Expressions in JSX */}
      <div style={cardStyle}>
        <h2>JavaScript Expressions in JSX</h2>
        <p>Current Year: <strong>{currentYear}</strong></p>
        <p>App Name: <strong>{appName}</strong></p>
        <p>Math Calculation: <strong>2 + 3 = {2 + 3}</strong></p>
        <p>String Method: <strong>{appName.toUpperCase()}</strong></p>
      </div>

      {/* 3. Conditional Rendering */}
      <div style={cardStyle}>
        <h2>Conditional Rendering</h2>
        {isLoggedIn ? (
          <p style={{ color: 'green' }}>Welcome back, {user.name}!</p>
        ) : (
          <p style={{ color: 'red' }}>Please log in to continue.</p>
        )}
        
        {/* Another way - using && operator */}
        {isLoggedIn && (
          <p>Your role: <strong>{user.role}</strong></p>
        )}
      </div>

      {/* 4. Rendering Lists */}
      <div style={cardStyle}>
        <h2>Rendering Lists with map()</h2>
        <ul style={listStyle}>
          {features.map((feature, index) => (
            <li key={index} style={listItemStyle}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* 5. Inline CSS Styles */}
      <div style={cardStyle}>
        <h2>Inline CSS Styles</h2>
        <div 
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '15px',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          This div uses inline CSS styles
        </div>
        
        <div 
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '2px solid #2ecc71'
          }}
        >
          Another styled div with multiple CSS properties
        </div>
      </div>

      {/* 6. Event Handling */}
      <div style={cardStyle}>
        <h2>Event Handling in JSX</h2>
        <button 
          style={{
            backgroundColor: '#9b59b6',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => alert('Button clicked!')}
          onMouseOver={(e) => e.target.style.backgroundColor = '#8e44ad'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#9b59b6'}
        >
          Click Me!
        </button>
      </div>

      {/* 7. JSX Attributes */}
      <div style={cardStyle}>
        <h2>JSX Attributes</h2>
        <img 
          src="https://via.placeholder.com/200x100/3498db/ffffff?text=Office+Space"
          alt="Office Space Placeholder"
          style={{
            width: '200px',
            height: '100px',
            borderRadius: '8px',
            border: '2px solid #3498db'
          }}
        />
        <br />
        <input 
          type="text" 
          placeholder="Enter office name..."
          style={{
            padding: '8px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '200px'
          }}
        />
      </div>

      {/* 8. Fragment Example */}
      <div style={cardStyle}>
        <h2>React Fragment</h2>
        <React.Fragment>
          <p>This is inside a React Fragment</p>
          <p>Multiple elements without extra wrapper div</p>
        </React.Fragment>
        
        {/* Short syntax for Fragment */}
        <>
          <p>Short fragment syntax</p>
          <p>Using empty tags</p>
        </>
      </div>
    </div>
  );
};

export default JSXExamples;
