import React from 'react';

const OfficeSpaceRental = () => {
  // Create an object of office to display details
  const singleOffice = {
    name: "Tech Hub Center",
    rent: 75000,
    address: "123 Business District, Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
  };

  // Create a list of Office objects
  const officeSpaces = [
    {
      id: 1,
      name: "Modern Business Complex",
      rent: 85000,
      address: "456 Corporate Avenue, Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      area: "2500 sq ft",
      amenities: ["WiFi", "Parking", "Conference Room"]
    },
    {
      id: 2,
      name: "Downtown Office Space",
      rent: 45000,
      address: "789 Main Street, Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      area: "1800 sq ft",
      amenities: ["WiFi", "Reception", "Kitchen"]
    },
    {
      id: 3,
      name: "Executive Business Suite",
      rent: 120000,
      address: "321 Financial District, Delhi, NCR",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=300&fit=crop",
      area: "3500 sq ft",
      amenities: ["WiFi", "Parking", "Conference Room", "Reception"]
    },
    {
      id: 4,
      name: "Startup Hub Workspace",
      rent: 35000,
      address: "654 Innovation Park, Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
      area: "1200 sq ft",
      amenities: ["WiFi", "Open Space", "Kitchen"]
    },
    {
      id: 5,
      name: "Premium Corporate Office",
      rent: 95000,
      address: "987 Elite Tower, Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop",
      area: "2800 sq ft",
      amenities: ["WiFi", "Parking", "Conference Room", "Reception", "Cafeteria"]
    },
    {
      id: 6,
      name: "Creative Workspace",
      rent: 55000,
      address: "159 Design District, Kolkata, West Bengal",
      image: "https://images.unsplash.com/photo-1497366812631-3fe1ec10ac9f?w=500&h=300&fit=crop",
      area: "2000 sq ft",
      amenities: ["WiFi", "Creative Spaces", "Kitchen", "Lounge"]
    }
  ];

  // Inline CSS styles
  const headerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '30px',
    textAlign: 'center',
    marginBottom: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    margin: '20px 0',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '25px'
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '15px'
  };

  const addressStyle = {
    color: '#7f8c8d',
    marginBottom: '15px',
    fontSize: '16px',
    lineHeight: '1.5'
  };

  const detailsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  };

  const areaStyle = {
    backgroundColor: '#ecf0f1',
    padding: '8px 15px',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#2c3e50'
  };

  const amenitiesStyle = {
    marginTop: '15px'
  };

  const amenityTagStyle = {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '15px',
    fontSize: '12px',
    margin: '2px',
    fontWeight: '500'
  };

  const singleOfficeStyle = {
    backgroundColor: '#f8f9fa',
    border: '2px solid #3498db',
    marginBottom: '40px'
  };

  // Function to determine rent color (Red if below 60000, Green if above)
  const getRentStyle = (rent) => {
    return {
      fontSize: '22px',
      fontWeight: 'bold',
      color: rent < 60000 ? '#e74c3c' : '#27ae60', // Red if below 60000, Green if above
      marginBottom: '10px'
    };
  };

  // Create heading element using JSX
  const pageHeading = (
    <div style={headerStyle}>
      <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold' }}>
        Office Space Rental App
      </h1>
      <p style={{ margin: '10px 0 0 0', fontSize: '18px', opacity: 0.9 }}>
        Find Your Perfect Workspace
      </p>
    </div>
  );

  // Using React.createElement() to create an element (alternative to JSX)
  const footerElement = React.createElement(
    'div',
    {
      style: {
        backgroundColor: '#34495e',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        borderRadius: '8px'
      }
    },
    React.createElement('p', { style: { margin: 0 } }, 'Built with React JSX and React.createElement()')
  );

  return (
    <div style={containerStyle}>
      {/* Render heading using JSX */}
      {pageHeading}

      {/* Single Office Object Display */}
      <div style={{ ...cardStyle, ...singleOfficeStyle }}>
        <img 
          src={singleOffice.image} 
          alt="Single Office Space" 
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h2 style={nameStyle}>Featured Office: {singleOffice.name}</h2>
          <div style={getRentStyle(singleOffice.rent)}>
            ₹{singleOffice.rent.toLocaleString()}/month
          </div>
          <p style={addressStyle}>{singleOffice.address}</p>
        </div>
      </div>

      {/* List of Office Spaces - Loop through array */}
      <div>
        <h2 style={{ 
          fontSize: '28px', 
          color: '#2c3e50', 
          textAlign: 'center', 
          marginBottom: '30px',
          borderBottom: '3px solid #3498db',
          paddingBottom: '10px'
        }}>
          Available Office Spaces
        </h2>
        
        {/* Using map() to loop through office space items */}
        {officeSpaces.map((office) => (
          <div 
            key={office.id} 
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
            }}
          >
            {/* Office Image - Using JSX attribute */}
            <img 
              src={office.image} 
              alt={`${office.name} - Office Space`} 
              style={imageStyle}
            />
            
            <div style={contentStyle}>
              {/* Office Name */}
              <h3 style={nameStyle}>{office.name}</h3>
              
              {/* Details Row */}
              <div style={detailsStyle}>
                {/* Rent with conditional color styling using JavaScript expression */}
                <div style={getRentStyle(office.rent)}>
                  ₹{office.rent.toLocaleString()}/month
                </div>
                <div style={areaStyle}>
                  {office.area}
                </div>
              </div>
              
              {/* Address */}
              <p style={addressStyle}>
                📍 {office.address}
              </p>
              
              {/* Amenities */}
              <div style={amenitiesStyle}>
                <strong style={{ color: '#2c3e50', marginBottom: '8px', display: 'block' }}>
                  Amenities:
                </strong>
                {office.amenities.map((amenity, index) => (
                  <span key={index} style={amenityTagStyle}>
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer created using React.createElement() */}
      {footerElement}
    </div>
  );
};

export default OfficeSpaceRental;
