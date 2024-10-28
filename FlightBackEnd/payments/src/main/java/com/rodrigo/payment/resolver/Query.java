package com.rodrigo.payment.resolver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.rodrigo.payment.model.Customer;
import com.rodrigo.payment.repository.CustomerRepository;


import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.scalars.ExtendedScalars;
import graphql.schema.GraphQLScalarType;

@Component
public class Query implements GraphQLQueryResolver {
    private CustomerRepository customerRepository;

    GraphQLScalarType longScalar =
            ExtendedScalars.newAliasedScalar("Long")
                    .aliasedScalar(ExtendedScalars.GraphQLLong)
                    .build();

    @Autowired
    public Query( CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
    public Iterable<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }
    public long countCustomers() {
        return customerRepository.count();
    }

}

