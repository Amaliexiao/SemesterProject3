package APIServer.Controllers;

import org.example.OpcUaConfig;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@RestController
@RequestMapping("/control")
public class BatchIDController {

    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);

    @GetMapping("/newBatchID")
    public void changeBatchID(@RequestParam(name = "newValue") int newValue) throws Exception {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Command.Parameter[0].Value");
        Variant v = new Variant(newValue);
        DataValue dv = DataValue.valueOnly(v);
        opcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }


}



