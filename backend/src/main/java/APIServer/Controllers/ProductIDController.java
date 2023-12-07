package APIServer.Controllers;

import APIServer.OPCUANode;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/control")
public class ProductIDController extends OPCUANode {

    @CrossOrigin
    @PostMapping("/newProductID")
    public void changeMachSpeed(@RequestParam(name = "newValue") float newValue) {
        setNodeValue("ns=6;s=::Program:Cube.Command.Parameter[1].Value", newValue);
    }


}


