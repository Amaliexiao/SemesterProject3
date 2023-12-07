package APIServer.Controllers;

import org.example.OpcUaConfig;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@RestController
@CrossOrigin
@RequestMapping("/control")
public class StateController {

    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);

    @CrossOrigin
    @GetMapping("/newState")
    public void changeCntrlValue(@RequestParam(name = "newValue") int newValue) throws Exception {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Command.CntrlCmd");
        Variant v = new Variant(newValue);
        DataValue dv = DataValue.valueOnly(v);
        opcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }

    @CrossOrigin
    @GetMapping("/newState2")
    public void changeCntrlRequest(@RequestParam(name = "newValue") int newValue) throws Exception {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Command.CmdChangeRequest");
        Variant v = new Variant(true);
        DataValue dv = DataValue.valueOnly(v);
        opcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }

    @CrossOrigin
    @PostMapping("/start")
    public void startRequest() throws Exception{
        changeCntrlValue(2);
        changeCntrlRequest(1);
    }

    @CrossOrigin
    @PostMapping("/reset")
    public void resetRequest() throws Exception{
        changeCntrlValue(1);
        changeCntrlRequest(1);
    }

    @CrossOrigin
    @PostMapping("/stop")
    public void stopRequest() throws Exception{
        changeCntrlValue(3);
        changeCntrlRequest(1);
    }

    @CrossOrigin
    @PostMapping("/abort")
    public void abortRequest() throws Exception{
        changeCntrlValue(4);
        changeCntrlRequest(1);
    }

    @CrossOrigin
    @PostMapping("/clear")
    public void clearRequest() throws Exception{
        changeCntrlValue(5);
        changeCntrlRequest(1);
    }

}
