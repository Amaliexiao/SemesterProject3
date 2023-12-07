package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class VibrationSensor extends OPCUANode {

    @CrossOrigin
    @GetMapping("/vibrationValue")
    public Variant getVibrationValue() {
        Variant sensorValue = getNodeValue("ns=6;s=::Program:Cube.Status.Parameter[4].Value");
        return sensorValue;
    }
}

