import axios from 'axios';

const FLIGHT_API_URL = 'http://localhost:8081/flights';

export const newFlight = (flightData) => {
  return axios.post(FLIGHT_API_URL, flightData, {
    headers: {
      'Content-Type': 'application/json', // Ensure JSON format
    },
  })
  .then(response => response.data)
  .catch(error => {
    console.error("Error creating flight:", error);
    throw error;
  });
};