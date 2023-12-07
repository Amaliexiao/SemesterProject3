package APIServer.Fetchers;


import APIServer.OPCUASession;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class MachSpeed extends OPCUASession {

    @CrossOrigin
    @GetMapping("/MachSpeedValue")
    public Variant getCurMachSpeedValue() {
        Variant sensorValue = getNodeValue("ns=6;s=::Program:Cube.Status.MachSpeed");

        return sensorValue;
    }
}


