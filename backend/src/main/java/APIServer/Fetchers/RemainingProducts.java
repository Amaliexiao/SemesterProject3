package APIServer.Fetchers;

import APIServer.Entities.BatchRepo;
import APIServer.Entities.Batches;
import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/fetch")
public class RemainingProducts extends OPCUANode {

    private BatchRepo batchRepo;
    public Variant getTotalProductsValue(){
        Variant totalProductsValue = getNodeValue("ns=6;s=::Program:product.produced");
        return totalProductsValue;
    }

    @CrossOrigin
    @PostMapping("/getRemainingProducts/{batchId}")
    public ResponseEntity<Integer> getBatchSize(@PathVariable Long batchId) {
        Batches batch = this.batchRepo.findById(batchId).orElse(null);

        if (batch != null) {
            int batchSize = batch.getSize();
            int remainingProducts = (Integer) getTotalProductsValue().getValue() - batchSize;
            return ResponseEntity.ok().body(remainingProducts);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
