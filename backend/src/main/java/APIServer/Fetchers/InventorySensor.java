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
public class InventorySensor {
    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);
    @CrossOrigin
    @GetMapping("/barley")
    public Variant getBarleyValue(){
        Variant barleyValue = opcUaConfig.getNodeValue("ns=6;s=::Program:Inventory.Barley");
        return barleyValue;
    }

    @CrossOrigin
    @GetMapping("/hops")
    public Variant getHopsValue(){
        Variant hopsValue = opcUaConfig.getNodeValue("ns=6;s=::Program:Inventory.Hops");
        return hopsValue;
    }

    @CrossOrigin
    @GetMapping("/malt")
    public Variant getMaltValue(){
        Variant maltValue = opcUaConfig.getNodeValue("ns=6;s=::Program:Inventory.Malt");
        return maltValue;
    }

    @CrossOrigin
    @GetMapping("/wheat")
    public Variant getWheatValue(){
        Variant wheatValue = opcUaConfig.getNodeValue("ns=6;s=::Program:Inventory.Wheat");
        return wheatValue;
    }

    @CrossOrigin
    @GetMapping("/yeast")
    public Variant getYeastValue(){
        Variant yeastValue = opcUaConfig.getNodeValue("ns=6;s=::Program:Inventory.Yeast");
        return yeastValue;
    }

}
