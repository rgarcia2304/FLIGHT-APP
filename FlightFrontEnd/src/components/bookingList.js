import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5217/api/Booking'); // Update URL to match your API endpoint
        setBookings(response.data); // Ensure this matches your response structure
      } catch (err) {
        setError("Error fetching bookings.");
      }
    };

    fetchBookings();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.confirmationNumber} - {booking.price}-{booking.departure}-{booking.destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;