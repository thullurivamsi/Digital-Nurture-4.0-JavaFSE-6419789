import React, { useState } from 'react';

const UserPage = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const flights = [
    { id: 1, airline: 'Delta', departure: '10:00 AM', arrival: '12:30 PM', price: '$250' },
    { id: 2, airline: 'United', departure: '11:30 AM', arrival: '2:00 PM', price: '$275' },
    { id: 3, airline: 'American', departure: '1:15 PM', arrival: '4:45 PM', price: '$300' },
    { id: 4, airline: 'Southwest', departure: '3:00 PM', arrival: '5:30 PM', price: '$225' },
  ];

  const handleBookFlight = () => {
    if (selectedFlight) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="user-page">
      <h2>Welcome Back!</h2>
      
      {!bookingConfirmed ? (
        <>
          <div className="flight-list">
            <h3>Select a Flight</h3>
            {flights.map(flight => (
              <div 
                key={flight.id} 
                className={`flight-card ${selectedFlight?.id === flight.id ? 'selected' : ''}`}
                onClick={() => setSelectedFlight(flight)}
              >
                <h4>{flight.airline}</h4>
                <p>Departure: {flight.departure}</p>
                <p>Arrival: {flight.arrival}</p>
                <p>Price: {flight.price}</p>
              </div>
            ))}
          </div>
          
          {selectedFlight && (
            <div className="booking-form">
              <label>
                Number of Tickets:
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  value={tickets} 
                  onChange={(e) => setTickets(e.target.value)}
                />
              </label>
              <button onClick={handleBookFlight}>Book Now</button>
            </div>
          )}
        </>
      ) : (
        <div className="confirmation">
          <h3>Booking Confirmed!</h3>
          <p>Flight: {selectedFlight.airline}</p>
          <p>Departure: {selectedFlight.departure}</p>
          <p>Tickets: {tickets}</p>
          <p>Total: ${parseInt(selectedFlight.price.replace('$', '')) * tickets}</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
