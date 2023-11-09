package org.example;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/states")
public class StateController {

    @GetMapping("/newState")
    public void ChangeCntrlValue(@RequestParam(name = "newValue") Variant newValue) throws Exception {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Command.CntrlCmd");
        Variant v = newValue;
        DataValue dv = new DataValue(v, null, null);
        OpcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }

    @GetMapping("/newState")
    public void ChangeCntrlRequest(@RequestParam(name = "newValue") Variant newValue) throws Exception {
        NodeId sensorNodeId = NodeId.parse("ns=6;s=::Program:Cube.Command.CmdChangeRequest");
        Variant v = newValue;
        DataValue dv = new DataValue(v, null, null);
        OpcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }
}
