package APIServer.Controllers;

import APIServer.OPCUASession;
import org.example.OpcUaConfig;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
@CrossOrigin
@RestController
@RequestMapping("/control")
public class MachSpeedController extends OPCUASession {

    @CrossOrigin
    @PostMapping("/newMachSpeed")
    public void changeMachSpeed(@RequestParam(name = "newValue") float newValue) {
        setNodeValue("ns=6;s=::Program:Cube.Command.MachSpeed", newValue);
    }


}

