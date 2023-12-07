package org.example;

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
    String hostname;
    int port;

    private OpcUaClient createAndConfigureOpcUaClient() {

        //Create and configure te OpcUaClient
        OpcUaClient client = null;
        try {
            this.hostname = "localhost"; // If you are running on the machine the hostname should be:"192.168.0.122"
                                            // If you are running on simulation the hostname should be: "localhost"
            this.port = 4840;
            List<EndpointDescription> endpoints = DiscoveryClient.getEndpoints(
                            "opc.tcp://" + hostname + ":" + port + "/milo")
                    .get();

// Choose an endpoint (you might want to add some logic to select the appropriate one)

            OpcUaClientConfigBuilder cfg = new OpcUaClientConfigBuilder();

            for (EndpointDescription endpoint : endpoints) {
                if (endpoint.getSecurityMode().name().equals("None")) {
                    EndpointDescription configPoint = EndpointUtil.updateUrl(endpoint, hostname, port);
                    cfg.setEndpoint(configPoint);
                    break;
                }
            }


// Create a session
            client = OpcUaClient.create(cfg.build());
            client.connect().get();

        } catch (UaException u) {
            System.out.println(u.getMessage());
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
        // Add more configuration?

        return client;
    }

    public OpcUaClient getOpcUaConfig(){
        return opcUaClient();
    }


    public Variant getNodeValue(String nodeID) {
        NodeId sensorNodeId = NodeId.parse(nodeID);
        Variant sensorValue = null;
        try {
            DataValue sensorData = this.getOpcUaConfig().readValue(0, TimestampsToReturn.Both, sensorNodeId).get();
            sensorValue = sensorData.getValue();
        }
        catch (ExecutionException | InterruptedException e) {
            System.out.println(e);
        }
        return sensorValue;
    }

}
