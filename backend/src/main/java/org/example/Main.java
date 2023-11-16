package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class Main implements CommandLineRunner {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public static void main(String[] args) {

        try {
            SpringApplication.run(Main.class, args);
            System.out.println("Hello, world!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
    @Override
    public void run(String... args) throws Exception {
        SpringToPostgresConnectionHandler handler = new SpringToPostgresConnectionHandler(jdbcTemplate);
        System.out.println(handler.getBeer(1));
    }
}