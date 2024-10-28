import React from 'react';
import BookingList from './bookingList';
import AddBookingForm from './addBookingForm';

function BookingsPage() {


  return (
    <div>
      <h1>Booking</h1>
      <AddBookingForm/>
      <BookingList />
    </div>
  );
}

export default BookingsPage;