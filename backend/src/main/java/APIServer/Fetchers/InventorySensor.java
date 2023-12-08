package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class InventorySensor extends OPCUANode {
    @CrossOrigin
    @GetMapping("/barley")
    public Variant getBarleyValue(){
        Variant barleyValue = getNodeValue("ns=6;s=::Program:Inventory.Barley");
        return barleyValue;
    }

    @CrossOrigin
    @GetMapping("/hops")
    public Variant getHopsValue(){
        Variant hopsValue = getNodeValue("ns=6;s=::Program:Inventory.Hops");
        return hopsValue;
    }

    @CrossOrigin
    @GetMapping("/malt")
    public Variant getMaltValue(){
        Variant maltValue = getNodeValue("ns=6;s=::Program:Inventory.Malt");
        return maltValue;
    }

    @CrossOrigin
    @GetMapping("/wheat")
    public Variant getWheatValue(){
        Variant wheatValue = getNodeValue("ns=6;s=::Program:Inventory.Wheat");
        return wheatValue;
    }

    @CrossOrigin
    @GetMapping("/yeast")
    public Variant getYeastValue(){
        Variant yeastValue = getNodeValue("ns=6;s=::Program:Inventory.Yeast");
        return yeastValue;
    }

}
