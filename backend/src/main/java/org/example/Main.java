package org.example;

import org.apache.log4j.BasicConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        BasicConfigurator.configure();

        try {
            SpringApplication.run(Main.class, args);
            System.out.println("Hello, world!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        PersistanceHandler persistanceHandler = PersistanceHandler.getInstance();
    }
}