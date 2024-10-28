package com.rodrigo.payment.repository;
import com.rodrigo.payment.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
