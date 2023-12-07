package APIServer.Fetchers;

import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.example.OpcUaConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class TotalProducts {
    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);
    @CrossOrigin
    @GetMapping("/totalProducts")
    public Variant getTotalProductsValue(){
        Variant totalProductsValue = opcUaConfig.getNodeValue("ns=6;s=::Program:product.produced");
        return totalProductsValue;
    }
}
