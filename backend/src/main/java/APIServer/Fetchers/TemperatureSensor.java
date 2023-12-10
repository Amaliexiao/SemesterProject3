package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class TemperatureSensor extends OPCUANode {

    @CrossOrigin
    @GetMapping("/temperatureValue")
    public Variant getTemperatureValue() {
        Variant temperatureValue = getNodeValue("ns=6;s=::Program:Cube.Status.Parameter[3].Value");

        return temperatureValue;
    }
}
