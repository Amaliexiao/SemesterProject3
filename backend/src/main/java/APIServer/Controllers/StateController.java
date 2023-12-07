package APIServer.Controllers;

import APIServer.OPCUANode;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/control")
public class StateController extends OPCUANode {

    @CrossOrigin
    @PostMapping("/newState")
    public void changeCntrlValue(@RequestParam(name = "newValue") int newValue) throws Exception {
        setNodeValue("ns=6;s=::Program:Cube.Command.CntrlCmd",newValue);
    }

    @CrossOrigin
    @GetMapping("/newState2")
    public void changeCntrlRequest(@RequestParam(name = "newValue") int newValue) throws Exception {
        setNodeValue("ns=6;s=::Program:Cube.Command.CmdChangeRequest",newValue);
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
