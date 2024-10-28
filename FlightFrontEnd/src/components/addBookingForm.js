import React, { useState } from 'react';
import { newBooking } from '../bookingAPi';

function AddBookingForm() {
  const [booking, setBooking] = useState({
    confirmationNumber: '',
    price: '',
    departure: '',
    destination:'',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
    console.log("Updated Booking Data:", { ...booking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting BookingData:", booking); // Debugging line
    try {
      const result = await newBooking(booking);
      console.log("Booking created:", result);
    } catch (error) {
      console.error("Error creating booking:", error);
    }

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Confirmation Number:</label>
        <input
          type="text"
          name="confirmationNumber"
          value={booking.confirmationNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>departure:</label>
        <input
          type="text"
          name="departure"
          value={booking.departure}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>destination:</label>
        <input
          type="text"
          name="destination"
          value={booking.destination}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={booking.price}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Booking</button>
    </form>
  );
}

export default AddBookingForm;