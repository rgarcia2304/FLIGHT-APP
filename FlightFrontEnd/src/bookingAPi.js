import axios from 'axios';

const BOOKING_API_URL = 'http://localhost:5217/api/booking';

export const newBooking = (bookingData) => {
  return axios.post(BOOKING_API_URL, bookingData, {
    headers: {
      'Content-Type': 'application/json', // Ensure JSON format
    },
  })
  .then(response => response.data)
  .catch(error => {
    console.error("Error creating booking:", error);
    throw error;
  });
};