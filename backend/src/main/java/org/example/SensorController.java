package org.example;

import org.apache.log4j.BasicConfigurator;
import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.SpringApplication;


import java.util.concurrent.ExecutionException;


@RestController
@RequestMapping("/api/sensors")
public class SensorController {


    public static void main(String[] args){
        BasicConfigurator.configure();

      try{
          SpringApplication.run(SensorController.class, args);
    }
            catch(Exception e){
        System.out.println(e.getMessage());
    }

    }
    private final OpcUaClient opcUaClient;
    @Autowired
    public SensorController(OpcUaClient opcUaClient) {
        this.opcUaClient = opcUaClient;
    }

    @GetMapping("/sensorValue")
    public Variant getSensorValue() {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:product.produced");
        Variant sensorValue = null;
        try {
            DataValue sensorData = opcUaClient.readValue(0, TimestampsToReturn.Both, sensorNodeId).get();
            sensorValue = sensorData.getValue();
            System.out.println(sensorValue.getValue());
        }
        catch (ExecutionException | InterruptedException e) {
            System.out.println(e);
        }
        return sensorValue;
    }
}
