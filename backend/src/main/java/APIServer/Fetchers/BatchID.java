package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.UShort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class BatchID extends OPCUANode {


    @CrossOrigin
    @GetMapping("/batchIDValue")
    public int getBatchIDValue() {
        Variant sensorValue = getNodeValue("ns=6;s=::Program:Cube.Status.Parameter[0].Value");
        return 0;
    }

}

