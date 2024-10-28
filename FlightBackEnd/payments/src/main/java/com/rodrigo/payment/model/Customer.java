package com.rodrigo.payment.model;
import jakarta.persistence.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name="cardNumber")
    private String cardNumber;

    @Column(name="expirationMonth")
    private String expirationMonth;

    @Column(name="expirationYear")
    private String expirationYear;

    @Column(name="ccv")
    private String ccv;

    public Customer() {
    }

    public Customer(String name, String address, String cardNumber, String expirationMonth, String expirationYear, String ccv) {
       this.name = name;
       this.address = address;
       this.cardNumber = cardNumber;
       this.expirationMonth = expirationMonth;
       this.expirationYear = expirationYear;
       this.ccv = ccv;

    }

    public Long getId() {
        return id;
    }

   public String getName() {
        return name;
   }
   public void setName(String name) {
        this.name = name;
   }
   public String getAddress() {
        return address;
   }
   public void setAddress(String address) {
        this.address = address;
   }

   public String getCardNumber() {
        return cardNumber;
   }
   public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
   }
   public String getExpirationMonth() {
        return expirationMonth;
   }
   public void setExpirationMonth(String expirationMonth) {
        this.expirationMonth = expirationMonth;
   }
   public String getExpirationYear() {
        return expirationYear;
   }
   public void setExpirationYear(String expirationYear) {
        this.expirationYear = expirationYear;
   }
   public String getCcv() {
        return ccv;
   }
   public void setCcv(String ccv) {
        this.ccv = ccv;
   }


    @Override
    public String toString() {
        return "Customer [id=" + id + ", name=" + name + ", address=" + address + ", cardNumber=" + cardNumber + ", expirationMonth="
        + expirationMonth + ", expirationYear=" + expirationYear + " ccv=" + ccv + "]";
    }

}
