package APIServer.Fetchers;

import APIServer.Controllers.BatchIDController;
import APIServer.Controllers.BatchesController;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.example.OpcUaConfig;
import org.example.SpringToPostgresConnectionHandler;
import org.json.simple.JSONObject;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetch")
public class RemainingProducts {

    ApplicationContext context = new AnnotationConfigApplicationContext(OpcUaConfig.class);
    OpcUaConfig opcUaConfig = context.getBean(OpcUaConfig.class);

    @CrossOrigin
    @GetMapping("/remainingProducts")
    public int getRemainingProducts() {
        // Getting size of current batch from database
        BatchesController
        // Fetching total products from API Endpoint to machine
//        TotalProducts tpInstance = new TotalProducts();
//        int totalProducts = Integer.parseInt(tpInstance.getTotalProductsValue().toString());

//        int remainingProducts = size - totalProducts;
        int remainingProducts = size;
        return remainingProducts;
    }

}
