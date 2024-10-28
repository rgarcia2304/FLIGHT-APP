package com.rodrigo.payment.resolver;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.rodrigo.payment.model.Customer;
import com.rodrigo.payment.repository.CustomerRepository;

import graphql.kickstart.tools.GraphQLMutationResolver;
import jakarta.persistence.EntityNotFoundException;

@Component
public class Mutation implements GraphQLMutationResolver {

    private CustomerRepository customerRepository;

    @Autowired
    public Mutation(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;

    }



    public Customer createCustomer(String name, String address, String cardNumber, String expirationMonth, String expirationYear, String ccv) {
        Customer customer = new Customer();
        customer.setName(name);
        customer.setAddress(address);
        customer.setCardNumber(cardNumber);
        customer.setExpirationMonth(expirationMonth);
        customer.setExpirationYear(expirationYear);
        customer.setCcv(ccv);
        // Save the Customer with the linked CreditCard
        return customerRepository.save(customer);
    }

    public boolean deleteCustomer(Long id) {
        customerRepository.deleteById(id);
        return true;
    }

    public Customer updateCustomer(Long id, String name, String address) throws EntityNotFoundException {
        Optional<Customer> optCustomer = customerRepository.findById(id);

        if (optCustomer.isPresent()) {
            Customer customer = optCustomer.get();

            if (name != null)
                customer.setName(name);
            if (address != null)
                customer.setAddress(address);

            customerRepository.save(customer);
            return customer;
        }

        throw new EntityNotFoundException("Not found Customer to update!");
    }
}

