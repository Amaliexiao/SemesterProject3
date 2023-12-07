package APIServer.Fetchers;

import APIServer.OPCUASession;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class CurrentProduct extends OPCUASession {

    @CrossOrigin
    @GetMapping("/currentProductValue")
    public Variant getCurrentProductValue() {
        Variant sensorValue = getNodeValue("ns=6;s=::Program:Cube.Admin.Parameter[0].Value");
        return sensorValue;
    }
}

