package APIServer;

import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.example.OpcUaConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.concurrent.ExecutionException;


public abstract class OPCUANode {

    public ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    public OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);

    public Variant getNodeValue(String nodeID) {
        NodeId sensorNodeId = NodeId.parse(nodeID);
        Variant sensorValue = null;
        try {
            DataValue sensorData = opcUaConfig.getOpcUaConfig().readValue(0, TimestampsToReturn.Both, sensorNodeId).get();
            sensorValue = sensorData.getValue();
        }
        catch (ExecutionException | InterruptedException e) {
            System.out.println(e);
        }
        return sensorValue;
    }

    public void setNodeValueFloat(String nodeID, float newValue){
        NodeId sensorNodeId = NodeId.parse(nodeID);
        Variant v = new Variant(newValue);
        DataValue dv = DataValue.valueOnly(v);
        opcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }

    public void setNodeValueInt(String nodeID, int newValue){
        System.out.println("Setnodevalueint " + newValue);
        NodeId sensorNodeId = NodeId.parse(nodeID);
        Variant v = new Variant(newValue);
        DataValue dv = DataValue.valueOnly(v);
        opcUaConfig.getOpcUaConfig().writeValue(sensorNodeId, dv);
    }
}
