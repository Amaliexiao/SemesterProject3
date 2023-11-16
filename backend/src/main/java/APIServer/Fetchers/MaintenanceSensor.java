package APIServer.Fetchers;

import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.example.OpcUaConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/fetch")
public class MaintenanceSensor {

    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);


    @CrossOrigin
    @GetMapping("/maintenanceCounter")
    public Variant getmaintenanceCounter(){
        Variant maintenanceCounter = opcUaConfig.getNodeValue("ns=6;s=::Program:Maintenance.Counter");
        return maintenanceCounter;
    }
}
