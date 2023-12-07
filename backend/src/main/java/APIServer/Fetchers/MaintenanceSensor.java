package APIServer.Fetchers;

import APIServer.OPCUASession;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class MaintenanceSensor extends OPCUASession {

    @CrossOrigin
    @GetMapping("/maintenanceCounter")
    public Variant getMaintenanceCounter(){
        Variant maintenanceCounter = getNodeValue("ns=6;s=::Program:Maintenance.Counter");
        return maintenanceCounter;
    }

    @CrossOrigin
    @GetMapping("/maintenanceState")
    public Variant getMaintenanceState(){
        Variant maintenanceCounter = getNodeValue("ns=6;s=::Program:Maintenance.State");
        return maintenanceCounter;
    }
}
