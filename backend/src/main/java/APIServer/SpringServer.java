package APIServer;

import org.example.OpcUaConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"APIServer.Fetchers", "org.example", "APIServer.Controllers"})
public class SpringServer {

    public static void main(String[] args) {
        SpringApplication.run(SpringServer.class, args);
    }

}