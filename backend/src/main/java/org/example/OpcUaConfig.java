package org.example;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.config.OpcUaClientConfig;
import org.eclipse.milo.opcua.sdk.client.api.identity.UsernameProvider;
import org.eclipse.milo.opcua.stack.client.DiscoveryClient;
import org.eclipse.milo.opcua.stack.core.UaException;
import org.eclipse.milo.opcua.stack.core.security.SecurityPolicy;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Configuration
public class OpcUaConfig {

    @Bean
    public static OpcUaClient opcUaClient() {
        OpcUaClient opcUaClient = createAndConfigureOpcUaClient();
        return opcUaClient;
    }

    private static OpcUaClient createAndConfigureOpcUaClient() {

        //Create and configure te OpcUaClient
        OpcUaClient client = null;
        try {
            List<EndpointDescription> endpoints = DiscoveryClient.getEndpoints("opc.tcp://localhost:4840/milo").get();

// Choose an endpoint (you might want to add some logic to select the appropriate one)
            EndpointDescription endpoint = endpoints.get(0);

// Create a session
            client = OpcUaClient.create(
                    OpcUaClientConfig.builder()
                            .setEndpoint(endpoint).setIdentityProvider(new UsernameProvider("sdu","1234"))
                            .build()
            );
            client.connect().get();

        } catch (UaException u) {
            System.out.println(u);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        // Add more configuration?

        return client;
    }

    public static OpcUaClient getOpcUaConfig(){
        return opcUaClient();
    }

}
