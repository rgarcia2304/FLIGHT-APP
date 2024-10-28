import React from 'react';
import CustomerForm from './customerForm';
import CustomerList from './customerList';


function CustomersPage() {


  return (
    <div>
      <h1>Customers</h1>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}

export default CustomersPage;