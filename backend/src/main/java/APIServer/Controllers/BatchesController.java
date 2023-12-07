package APIServer.Controllers;

import APIServer.Entities.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/queue")
public class BatchesController {
    private BatchRepo batchRepo;
    private BeerRepository beerRepository;
    private UserRepo userRepo;

    @Autowired
    public BatchesController(BeerRepository beerRepository, BatchRepo queuedBatchRepo, UserRepo userRepo) {
        this.userRepo = userRepo;
        this.batchRepo = queuedBatchRepo;
        this.beerRepository = beerRepository;
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
    @PostMapping("/saveStartTime")
    public void saveStartTime(@RequestParam(name = "batchId") Long batchId) {
        Batches batch = batchRepo.findById(batchId).get();
        batch.setStartTime(new Timestamp(System.currentTimeMillis()));
        batchRepo.save(batch);
    }

    @CrossOrigin
    @PostMapping("/saveStopTime")
    public void saveStopTime(@RequestParam(name = "batchId") Long batchId) {
        Batches batch = batchRepo.findById(batchId).get();
        batch.setStopTime(new Timestamp(System.currentTimeMillis()));
        batchRepo.save(batch);
    }

    @CrossOrigin
    @PostMapping("/saveSuccessfulBeers")
    public void saveSuccessful(@RequestParam(name = "batchId") Long batchId, @RequestParam(name = "successfulBeers") int successfulBeers) {
        Batches batch = batchRepo.findById(batchId).get();
        batch.setSucesssfullBeers(successfulBeers);
        batchRepo.save(batch);
    }

    @CrossOrigin
    @PostMapping("/saveFailedBeers")
    public void saveFailedful(@RequestParam(name = "batchId") Long batchId, @RequestParam(name = "failedBeers") int failedBeers) {
        Batches batch = batchRepo.findById(batchId).get();
        batch.setFailedBeers(failedBeers);
        batchRepo.save(batch);
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
