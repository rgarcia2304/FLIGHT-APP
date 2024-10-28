// src/components/CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/apis/graphql';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.post(API_URL, {
      query: `
        query {
          findAllCustomers {
            id
            name
            address
            cardNumber
            expirationMonth
            expirationYear
            ccv
            
          }
        }
      `
    })
    .then(response => setCustomers(response.data.data.findAllCustomers))
    .catch(error => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name} - {customer.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
