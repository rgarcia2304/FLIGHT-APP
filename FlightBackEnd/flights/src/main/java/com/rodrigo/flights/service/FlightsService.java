package com.rodrigo.flights.service;
import com.rodrigo.flights.model.Flight;
import java.util.List;
import java.util.Optional;

public interface FlightsService {

    List<Flight> findAll();
    
    Flight saveFlight(Flight flight);
    Flight getById(Long id);
    Optional<Flight> findCheapestFlight(String departureCity, String arrivalCity);
}
