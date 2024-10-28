package com.rodrigo.flights.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;


@Entity
public class Flight{
        
    private String origin;
    private String destination;
    private Double price;
    @Id
    @GeneratedValue
    private Long id;

    public Flight(){}

    public String getOrigin(){

        return origin;
    }

    public void setOrigin(String from){

        this.origin = from;
    }

    public String getDestination(){

        return destination;
    }

    public void setDestination(String to){

        this.destination = to;
    }

    public Double getPrice(){

        return price;
    }

    public void setPrice(Double price){

        this.price = price;
    }

    public Long getId(){

        return id;
    }

    public void setId(Long id){

        this.id = id;
    }

    

}


