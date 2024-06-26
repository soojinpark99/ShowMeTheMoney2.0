package com.example.showmethemoney2.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private int year;
    private int month;
    private int income;
    private int expense;
    private double budget;

    public Budget() {}

    public Budget(String username, int year, int month, double budget) {
        this.username = username;
        this.year = year;
        this.month = month;
        this.budget = budget;
    }
}
