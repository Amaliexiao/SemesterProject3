package APIServer.Fetchers;

import APIServer.Entities.BatchRepo;
import APIServer.Entities.Batches;
import APIServer.OPCUANode;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.UShort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/fetch")
public class RemainingProducts extends OPCUANode {

    private BatchRepo batchRepo;
    @Autowired
    public RemainingProducts(BatchRepo batchRepo){
        this.batchRepo = batchRepo;
    }
    public Variant getTotalProductsValue(){
        Variant totalProductsValue = getNodeValue("ns=6;s=::Program:product.produced");
        return totalProductsValue;
    }

    @CrossOrigin
    @GetMapping("/getRemainingProducts")
    public int getBatchSize(@RequestParam(name ="batchId") Long batchId) {
        Batches batch = this.batchRepo.findById(batchId).orElse(null);
        if (batch != null) {
            int batchSize = batch.getSize();
            UShort totalProductsValue = (UShort) getTotalProductsValue().getValue();
            int remainingProducts =  batchSize - totalProductsValue.intValue();
            return remainingProducts;
        } else {
            return -1;
        }
}}
