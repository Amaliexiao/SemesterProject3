package APIServer.Fetchers;

import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.example.OpcUaConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.SpringApplication;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/fetch")
public class BatchID {

    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);

    @CrossOrigin
    @GetMapping("/batchIDValue")
    public Variant getBatchIDValue() {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Status.Parameter[0].Value");
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

