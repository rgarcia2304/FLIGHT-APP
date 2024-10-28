package com.rodrigo.flights.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.rodrigo.flights.model.Flight;

import java.util.List;

public interface FlightsRepository extends JpaRepository<Flight,Long> {
    List<Flight> findByOriginAndDestinationOrderByPrice(String origin, String destination);

}
