import React from 'react';

const GuestPage = () => {
  const flights = [
    { id: 1, airline: 'Delta', departure: '10:00 AM', arrival: '12:30 PM', price: '$250' },
    { id: 2, airline: 'United', departure: '11:30 AM', arrival: '2:00 PM', price: '$275' },
    { id: 3, airline: 'American', departure: '1:15 PM', arrival: '4:45 PM', price: '$300' },
    { id: 4, airline: 'Southwest', departure: '3:00 PM', arrival: '5:30 PM', price: '$225' },
  ];

  return (
    <div className="guest-page">
      <h2>Available Flights</h2>
      <p>Please login to book tickets</p>
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.airline}</h3>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Price: {flight.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPage;
