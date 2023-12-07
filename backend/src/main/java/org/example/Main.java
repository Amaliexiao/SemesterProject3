package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {

        try {
            SpringApplication.run(Main.class, args);
            System.out.println("Hello, world!");

            ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
            OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);

            opcUaConfig.temp();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}