package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class CurrentState extends OPCUANode {

    @CrossOrigin
    @GetMapping("/currentStateValue")
    public Variant getCurrentStateValue() {
        Variant currentStateValue = getNodeValue("ns=6;s=::Program:Cube.Status.StateCurrent");
        return currentStateValue;
    }
}

