import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:8081/flights'); // Update URL to match your API endpoint
        setFlights(response.data); // Ensure this matches your response structure
      } catch (err) {
        setError("Error fetching flights.");
      }
    };

    fetchFlights();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Flight List</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>{flight.origin} - {flight.destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;