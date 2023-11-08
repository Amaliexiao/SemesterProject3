package org.example;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.apache.log4j.BasicConfigurator;
import org.eclipse.milo.opcua.stack.client.DiscoveryClient;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.List;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        // Create a Spring application context using the OpcUaConfig class
        ConfigurableApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);

        // Obtain the OpcUaClient bean from the context
        OpcUaClient opcUaClient = context.getBean(OpcUaClient.class);

        // Create an instance of SensorController and pass the OpcUaClient
        SensorController sensorController = new SensorController(opcUaClient);

        // Call the getSensorValue method to retrieve the sensor value
        Variant sensorValue = sensorController.getSensorValue();

        // Check the sensor value and print it
        if (sensorValue != null) {
            System.out.println("Sensor Value: " + sensorValue);
        } else {
            System.out.println("Failed to retrieve sensor value.");
        }

        // Close the Spring context
        context.close();
    }

    }