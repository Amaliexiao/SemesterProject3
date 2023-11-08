package org.example;

import org.apache.log4j.BasicConfigurator;
import org.eclipse.milo.opcua.stack.client.DiscoveryClient;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;

import java.util.List;

public class OPCUAExample {
    public static void main(String[] args) {
        BasicConfigurator.configure();
        //SpringApplication.run(Main.class, args);

        try{
            List<EndpointDescription> endpoints = DiscoveryClient.getEndpoints("opc.tcp://localhost:4840/milo").get();
            System.out.println(endpoints);

        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}
