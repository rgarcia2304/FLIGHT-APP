import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import FlightsPage from './components/FlightsPage';
import CustomersPage from './components/CustomerPage';
import BookingsPage from './components/BookingsPage'
import HomePages from './components/HomePage';


function App() {


  return (
    <Router>
  
        <nav>
          <Link to="/">HomePage</Link> 
          <Link to="/customers">Customers</Link> | 
          <Link to="/flights">Flights</Link>
          <Link to="/bookings">Bookings</Link>

        </nav>
        <Routes>
        <Route path="/" element={<HomePages/>} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
    </Router>
  );
}
  export default App;