package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class HumiditySensor extends OPCUANode {
    @CrossOrigin
    @GetMapping("/humidityValue")
    public Variant getHumidityValue() {
        Variant humidityValue = getNodeValue("ns=6;s=::Program:Cube.Status.Parameter[2].Value");
        return humidityValue;
    }
}

