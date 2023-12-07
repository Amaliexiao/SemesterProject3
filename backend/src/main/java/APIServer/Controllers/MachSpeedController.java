package APIServer.Controllers;

import APIServer.OPCUANode;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/control")
public class MachSpeedController extends OPCUANode {

    @CrossOrigin
    @PostMapping("/newMachSpeed")
    public void changeMachSpeed(@RequestParam(name = "newValue") float newValue) {
        setNodeValue("ns=6;s=::Program:Cube.Command.MachSpeed", newValue);
    }


}

