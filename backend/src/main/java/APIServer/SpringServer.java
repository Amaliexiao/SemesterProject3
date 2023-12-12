package APIServer;

import APIServer.Entities.BeerRepository;
import APIServer.Entities.Beers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.util.Objects;

@SpringBootApplication
@ComponentScan(basePackages = {"APIServer.Fetchers", "org.example", "APIServer.Controllers","APIServer.Entities"})
public class SpringServer implements CommandLineRunner {
    @Autowired
    private BeerRepository beerRepo;

    public static void main(String[] args) {
        SpringApplication.run(SpringServer.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        runCreateAndSave();
    }
    private void createAndSaveBeer(String name){
        Beers exsisting = beerRepo.findByName(name);
        if(exsisting == null){
            Beers beers = new Beers();
            beers.setName(name);
            beerRepo.save(beers);
        }
    }
    private void runCreateAndSave(){
        createAndSaveBeer("Pilsner");
        createAndSaveBeer("Wheat");
        createAndSaveBeer("IPA");
        createAndSaveBeer("Stout");
        createAndSaveBeer("Ale");
        createAndSaveBeer("Alc free");
    }
}