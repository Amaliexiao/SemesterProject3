package APIServer;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.config.OpcUaClientConfig;
import org.eclipse.milo.opcua.sdk.client.api.config.OpcUaClientConfigBuilder;
import org.eclipse.milo.opcua.sdk.client.api.identity.UsernameProvider;
import org.eclipse.milo.opcua.stack.client.DiscoveryClient;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.eclipse.milo.opcua.stack.core.security.SecurityPolicy;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;
import org.eclipse.milo.opcua.stack.core.util.EndpointUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Configuration
public class OpcUaConfig {

    @Bean
    public OpcUaClient opcUaClient() {
        OpcUaClient opcUaClient = createAndConfigureOpcUaClient();
        return opcUaClient;
    }
    //initialize hostname and port
    String hostname;
    int port;

    private OpcUaClient createAndConfigureOpcUaClient() {

        //Create and configure te OpcUaClient
        OpcUaClient client = null;
        try {
            // If you are running on the machine the hostname should be:"192.168.0.122"
            // If you are running on simulation the hostname should be: "localhost"
            this.hostname = "localhost";
            this.port = 4840;
            List<EndpointDescription> endpoints = DiscoveryClient.getEndpoints(
                            "opc.tcp://" + hostname + ":" + port + "/milo").get();

            OpcUaClientConfigBuilder cfg = new OpcUaClientConfigBuilder();
            for (EndpointDescription endpoint : endpoints) {
                if (endpoint.getSecurityMode().name().equals("None")) {
                    EndpointDescription configPoint = EndpointUtil.updateUrl(endpoint, hostname, port);
                    cfg.setEndpoint(configPoint);
                    break;
                }
            }
            client = OpcUaClient.create(cfg.build());
            client.connect().get();
        } catch (UaException u) {
            System.out.println(u.getMessage());
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        return client;
    }

    public OpcUaClient getOpcUaConfig(){
        return opcUaClient();
    }
}
