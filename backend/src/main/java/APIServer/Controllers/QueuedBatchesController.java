package APIServer.Controllers;

import APIServer.Entities.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/database")
public class QueuedBatchesController{
    private QueuedBatchRepo queuedBatchRepo;
    private BeerRepository beerRepository;
    private UserRepo userRepo;

    @Autowired
    public QueuedBatchesController(BeerRepository beerRepository, QueuedBatchRepo queuedBatchRepo, UserRepo userRepo){
        this.userRepo = userRepo;
        this.queuedBatchRepo =queuedBatchRepo;
        this.beerRepository = beerRepository;
    }
    @CrossOrigin
    @PostMapping("/addBatch")
    public boolean addQueuedBatch(@RequestParam(name="userID") Long userID, @RequestParam(name = "size") int size, @RequestParam(name = "beerType") Long beerType, @RequestParam(name = "speed") int speed) {
        Beers beertype = beerRepository.findById(beerType).orElseThrow(() -> new  EntityNotFoundException("beer not found"));
        Users user = userRepo.findById(userID).orElseThrow(()->new EntityNotFoundException("User not found"));
        Queuedbatches queuedbatch = new Queuedbatches();
        queuedbatch.setSize(size);
        queuedbatch.setBeerId(beertype);
        queuedbatch.setSpeed(speed);
        queuedbatch.setUser(user);

        this.queuedBatchRepo.save(queuedbatch);
        return true;
    }

    @CrossOrigin
    @GetMapping("/getBatchQueue")
    public ResponseEntity<List<Queuedbatches>> getQueue(){
        List<Queuedbatches> queue = this.queuedBatchRepo.findAll();
        return ResponseEntity.ok(queue);
    }
}
