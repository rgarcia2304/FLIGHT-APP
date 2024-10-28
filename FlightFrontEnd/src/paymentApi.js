// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/apis/graphql';

export const createCustomer = async (name, address, cardNumber, expirationMonth, expirationYear, ccv) => {
  return await axios.post(API_URL, {
    query: `
      mutation {
        createCustomer(
          name: "${name}",
          address: "${address}",
          cardNumber: "${cardNumber}",
          expirationMonth: "${expirationMonth}",
          expirationYear: "${expirationYear}",
          ccv: "${ccv}"
        ) {
          id
          name
          address
          cardNumber
          expirationMonth
          expirationYear
          ccv
        }
      }
    `,
  });
};
