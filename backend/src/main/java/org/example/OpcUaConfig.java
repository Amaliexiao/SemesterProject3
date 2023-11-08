package org.example;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.config.OpcUaClientConfig;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.eclipse.milo.opcua.stack.core.security.SecurityPolicy;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpcUaConfig {

    @Bean
    public OpcUaClient opcUaClient() {
        OpcUaClient opcUaClient = createAndConfigureOpcUaClient();
        return opcUaClient;
    }

    private OpcUaClient createAndConfigureOpcUaClient() {

        //Create and configure te OpcUaClient
        OpcUaClient client = null;
        try {
            client = OpcUaClient.create(
                    "opc.tcp://localhost:12687/milo"
            );
        } catch (UaException u) {
            System.out.println(u);
        }
        // Add more configuration?

        return client;
    }

}
