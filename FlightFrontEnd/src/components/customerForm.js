import React, { useState } from 'react';
import { createCustomer } from '../paymentApi';

function CustomerForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    ccv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCustomer(
        formData.name,
        formData.address,
        formData.cardNumber,
        formData.expirationMonth,
        formData.expirationYear,
        formData.ccv
      );
      alert(`Customer created: ${response.data.data.createCustomer.name}`);
    } catch (error) {
      alert('Error creating customer');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
      <input type="text" name="expirationMonth" placeholder="Expiration Month" value={formData.expirationMonth} onChange={handleChange} required />
      <input type="text" name="expirationYear" placeholder="Expiration Year" value={formData.expirationYear} onChange={handleChange} required />
      <input type="text" name="ccv" placeholder="CCV" value={formData.ccv} onChange={handleChange} required />
      <button type="submit">Create Customer</button>
    </form>
  );
}

export default CustomerForm;