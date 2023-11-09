package org.example;

import org.apache.log4j.BasicConfigurator;
import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.config.OpcUaClientConfig;
import org.eclipse.milo.opcua.stack.client.DiscoveryClient;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
@SpringBootApplication
public class OPCUAExample {
    public static void main(String[] args) {
        BasicConfigurator.configure();
        //SpringApplication.run(Main.class, args);

        SensorController sensorController = new SensorController(OpcUaConfig.getOpcUaConfig());
        try{

            sensorController.getSensorValue();

        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}