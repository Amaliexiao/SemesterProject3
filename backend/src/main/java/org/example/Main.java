package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {

        try {
            SpringApplication.run(Main.class, args);
            System.out.println("Hello, world!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}