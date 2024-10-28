import React, { useState } from 'react';
import { newFlight } from '../flightApi';

function AddFlightForm() {
  const [flight, setFlight] = useState({
    origin: '',
    destination: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight((prevFlight) => ({
      ...prevFlight,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
    console.log("Updated Flight Data:", { ...flight, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Flight Data:", flight); // Debugging line
    try {
      const result = await newFlight(flight);
      console.log("Flight created:", result);
    } catch (error) {
      console.error("Error creating flight:", error);
    }

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Origin:</label>
        <input
          type="text"
          name="origin"
          value={flight.origin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={flight.destination}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={flight.price}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Flight</button>
    </form>
  );
}

export default AddFlightForm;