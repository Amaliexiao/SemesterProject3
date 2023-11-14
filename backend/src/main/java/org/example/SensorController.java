package org.example;

//import org.apache.log4j.BasicConfigurator;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.SpringApplication;


import java.util.concurrent.ExecutionException;


@RestController
@RequestMapping("/api/sensors")
public class SensorController {

    OpcUaConfig opcUaConfig;


    public static void main(String[] args){
      try{
          SpringApplication.run(SensorController.class, args);
    }
            catch(Exception e){
        System.out.println(e.getMessage());
    }

    }

    public SensorController(OpcUaConfig opcUaConfig){
        this.opcUaConfig = opcUaConfig;
    }
    @GetMapping("/sensorValue")
    public Variant getSensorValue() {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Command.CntrlCmd");
        Variant sensorValue = null;
        try {
            DataValue sensorData = opcUaConfig.getOpcUaConfig().readValue(0, TimestampsToReturn.Both, sensorNodeId).get();
            sensorValue = sensorData.getValue();
        }
        catch (ExecutionException | InterruptedException e) {
            System.out.println(e);
        }
        return sensorValue;
    }
}
