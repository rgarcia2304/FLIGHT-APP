import React from 'react';
import FlightList from './flightList';
import AddFlightForm from './addFlightForm';

function FlightsPage() {


  return (
    <div>
      <h1>Flights</h1>
      <AddFlightForm />
      <FlightList />
    </div>
  );
}

export default FlightsPage;