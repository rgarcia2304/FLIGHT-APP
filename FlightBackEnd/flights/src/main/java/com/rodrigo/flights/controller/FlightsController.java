package com.rodrigo.flights.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.rodrigo.flights.model.Flight;

import com.rodrigo.flights.service.FlightsService;


@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow requests only from localhost:3000
@RequestMapping("/flights")
public class FlightsController {
    private final FlightsService flightsService;


    public FlightsController(FlightsService flightsService){

        this.flightsService= flightsService;
    }

    @GetMapping 
    public ResponseEntity<List<Flight>>findAll(){

        return ResponseEntity.status(HttpStatus.OK).body(this.flightsService.findAll());
    }

    @GetMapping("/find") 
    public ResponseEntity<List<Flight>>findAll2(){

        return ResponseEntity.status(HttpStatus.OK).body(this.flightsService.findAll());
    }

    @PostMapping
    public ResponseEntity<Flight>newFlight( @RequestBody Flight newFlight){

        return ResponseEntity.status(HttpStatus.OK).body(this.flightsService.saveFlight(newFlight));
    }

    @GetMapping("/{id}") 
    public ResponseEntity<Flight>getFlight(Long idFlight) {
        return ResponseEntity.status(HttpStatus.OK).body(this.flightsService.getById(idFlight));}

    @GetMapping("/cheapest")
    public ResponseEntity<Flight> getCheapestFlight(@RequestParam String departureCity, @RequestParam String arrivalCity) {
        Optional<Flight> flight = flightsService.findCheapestFlight(departureCity, arrivalCity);
        return flight.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

}
