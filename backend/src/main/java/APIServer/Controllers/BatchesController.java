package APIServer.Controllers;

import APIServer.Entities.*;
import jakarta.persistence.EntityNotFoundException;
import org.bouncycastle.cert.ocsp.Req;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/queue")
public class BatchesController {
    private BatchRepo batchRepo;
    private BeerRepository beerRepository;
    private UserRepo userRepo;
    CompletedBatches completedBatches = new CompletedBatches();

    private CompletedBatchRepo completedBatchRepo;
    @Autowired
    public BatchesController(BeerRepository beerRepository, BatchRepo queuedBatchRepo, UserRepo userRepo, CompletedBatchRepo completedBatchRepo) {
        this.userRepo = userRepo;
        this.batchRepo = queuedBatchRepo;
        this.beerRepository = beerRepository;
        this.completedBatchRepo = completedBatchRepo;
    }

    @CrossOrigin
    @PostMapping("/addBatch")
    public void addBatch(@RequestParam(name = "userID") Long userID, @RequestParam(name = "size") int size, @RequestParam(name = "beerType") Long beerType, @RequestParam(name = "speed") int speed) {
        Beers beertype = beerRepository.findById(beerType).orElseThrow(() -> new EntityNotFoundException("beer not found"));
        Users user = userRepo.findById(userID).orElseThrow(() -> new EntityNotFoundException("User not found"));
        Batches batch = new Batches();
        batch.setSize(size);
        batch.setBeerId(beertype);
        batch.setSpeed(speed);
        batch.setUser(user);

        this.batchRepo.save(batch);
    }


    @CrossOrigin
    @PostMapping("/addCompletedBatch")
    public void addCompletedBatch(@RequestParam(name = "userID") Long userID, @RequestParam(name = "size") int size, @RequestParam(name = "beerType") Long beerType, @RequestParam(name = "speed") int speed) {
        Beers beertype = beerRepository.findById(beerType).orElseThrow(() -> new EntityNotFoundException("beer not found"));
        Users user = userRepo.findById(userID).orElseThrow(() -> new EntityNotFoundException("User not found"));
        completedBatches = new CompletedBatches();
        completedBatches.setSize(size);
        completedBatches.setBeerId(beertype);
        completedBatches.setSpeed(speed);
        completedBatches.setUser(user);

        this.completedBatchRepo.save(completedBatches);
    }

    @CrossOrigin
    @GetMapping("/finishBatch")
    public String finishBatch(@RequestParam(name = "successfulBeers") Integer successfulBeers){
        System.out.println("Successful beers:" + successfulBeers);
        CompletedBatches completedBatches1 = completedBatchRepo.findById(2L).get();
        completedBatches1.setSuccesfulBeers(successfulBeers);
        completedBatchRepo.save(completedBatches1);
        return "This api works" + successfulBeers;
    }
    @CrossOrigin
    @PostMapping("removeBatch")
    public void removeBatch(@RequestParam(name = "batchId") Long batchId) {
        batchRepo.deleteById(batchId);
    }

    @CrossOrigin
    @GetMapping("/getBatchQueue")
    public List<Batches> getQueue() {
        List<Batches> queue = this.batchRepo.findAll();
        return queue;
    }

    @CrossOrigin
    @GetMapping("/getFirstBatch")
    public Batches sendFirstBatch() {
        List<Batches> queue = this.batchRepo.findAll();
        return queue.get(0);
    }
}
