package com.rodrigo.flights.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import java.util.Optional;

import com.rodrigo.flights.model.Flight;
import com.rodrigo.flights.repository.FlightsRepository;
import com.rodrigo.flights.service.FlightsService;

@Service
public class FlightsServiceImpl implements FlightsService {

    private final FlightsRepository flightsRepository;
    

                                                
    public FlightsServiceImpl(FlightsRepository flightsRepository){
        this.flightsRepository = flightsRepository;
    }

    @Override
    public List<Flight> findAll() {
        return flightsRepository.findAll();
    }

    public Flight saveFlight(Flight flight){
        return flightsRepository.save(flight);
    }

    @Override
    public Flight getById(Long id) {
        var optFlight= flightsRepository.findById(id);
        return optFlight.orElseThrow();
    }

    public Optional<Flight> findCheapestFlight(String origin, String destination) {
        List<Flight> flights= flightsRepository.findByOriginAndDestinationOrderByPrice(origin,destination);
        return flights.isEmpty() ? Optional.empty() : Optional.of(flights.get(0));
    }


}
