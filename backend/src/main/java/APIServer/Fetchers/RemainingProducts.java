package APIServer.Fetchers;

import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class RemainingProducts extends OPCUANode {


    public Variant getTotalProductsValue(){
        Variant totalProductsValue = getNodeValue("ns=6;s=::Program:product.produced");
        return totalProductsValue;
    }

//    public Variant getBatchSize() {
////        Variant d = null;
////        return d;
//    }
//
//    @CrossOrigin
//    @GetMapping("/totalProducts")
//    public Variant getRemainingProducts() {
//
////        return
//    }

}
