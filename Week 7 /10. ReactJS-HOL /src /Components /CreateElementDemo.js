import React from 'react';

// Component demonstrating React.createElement() vs JSX
const CreateElementDemo = () => {
  
  // Using React.createElement() to create elements (without JSX)
  const elementUsingCreateElement = React.createElement(
    'div',
    {
      style: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '10px 0'
      }
    },
    React.createElement('h2', null, 'Created with React.createElement()'),
    React.createElement('p', null, 'This element was created without JSX'),
    React.createElement(
      'button',
      {
        style: {
          backgroundColor: 'white',
          color: '#3498db',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        },
        onClick: () => alert('Button created with React.createElement()!')
      },
      'Click Me'
    )
  );

  // Complex nested structure using React.createElement()
  const complexElement = React.createElement(
    'div',
    {
      style: {
        border: '2px solid #e74c3c',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0'
      }
    },
    React.createElement('h3', { style: { color: '#e74c3c' } }, 'Complex Element Structure'),
    React.createElement(
      'ul',
      { style: { listStyleType: 'none', padding: 0 } },
      React.createElement(
        'li',
        { style: { backgroundColor: '#f8f9fa', padding: '8px', margin: '4px 0', borderRadius: '4px' } },
        'Item 1 - Created with createElement'
      ),
      React.createElement(
        'li',
        { style: { backgroundColor: '#f8f9fa', padding: '8px', margin: '4px 0', borderRadius: '4px' } },
        'Item 2 - No JSX used'
      ),
      React.createElement(
        'li',
        { style: { backgroundColor: '#f8f9fa', padding: '8px', margin: '4px 0', borderRadius: '4px' } },
        'Item 3 - Pure JavaScript'
      )
    )
  );

  // Office card created using React.createElement()
  const officeCardElement = React.createElement(
    'div',
    {
      style: {
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '15px 0'
      }
    },
    React.createElement('img', {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop',
      alt: 'Office Space',
      style: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
      }
    }),
    React.createElement(
      'div',
      { style: { padding: '20px' } },
      React.createElement(
        'h4',
        { style: { margin: '0 0 10px 0', color: '#2c3e50' } },
        'Premium Office Space'
      ),
      React.createElement(
        'p',
        { 
          style: { 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#27ae60',
            margin: '10px 0' 
          } 
        },
        '₹85,000/month'
      ),
      React.createElement(
        'p',
        { style: { color: '#7f8c8d', margin: '10px 0' } },
        '📍 Business District, Mumbai'
      )
    )
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* JSX Header for comparison */}
      <div style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h1>React.createElement() vs JSX Demonstration</h1>
        <p>Comparing both approaches to create React elements</p>
      </div>

      {/* Section 1: JSX Example */}
      <div style={{
        backgroundColor: '#27ae60',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '10px 0'
      }}>
        <h2>Created with JSX (Normal Way)</h2>
        <p>This element was created using JSX syntax</p>
        <button 
          style={{
            backgroundColor: 'white',
            color: '#27ae60',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Button created with JSX!')}
        >
          Click Me
        </button>
      </div>

      {/* Section 2: React.createElement() Example */}
      {elementUsingCreateElement}

      {/* Section 3: Complex nested structure */}
      {complexElement}

      {/* Section 4: Office card using createElement */}
      <h3 style={{ color: '#8e44ad', borderBottom: '2px solid #8e44ad', paddingBottom: '5px' }}>
        Office Card Created with React.createElement():
      </h3>
      {officeCardElement}

      {/* Section 5: Comparison */}
      <div style={{
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0'
      }}>
        <h3 style={{ color: '#495057' }}>JSX vs React.createElement() Comparison:</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <div>
            <h4 style={{ color: '#28a745' }}>JSX Advantages:</h4>
            <ul style={{ textAlign: 'left' }}>
              <li>More readable and intuitive</li>
              <li>HTML-like syntax</li>
              <li>Easier to write and maintain</li>
              <li>Better developer experience</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#dc3545' }}>React.createElement() Advantages:</h4>
            <ul style={{ textAlign: 'left' }}>
              <li>No transpilation needed</li>
              <li>More explicit</li>
              <li>Better for dynamic element creation</li>
              <li>Pure JavaScript approach</li>
            </ul>
          </div>
        </div>

        <div style={{
          backgroundColor: '#e9ecef',
          padding: '15px',
          borderRadius: '5px',
          marginTop: '15px'
        }}>
          <strong>Note:</strong> JSX is transpiled to React.createElement() calls by Babel during the build process.
        </div>
      </div>
    </div>
  );
};

export default CreateElementDemo;
