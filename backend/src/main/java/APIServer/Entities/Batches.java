package APIServer.Entities;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
public class Batches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private Users user;

    private  int size;

    @ManyToOne
    @JoinColumn(name = "beertype")
    private Beers beerId;
    private int speed;
    private Timestamp startTime;
    private Timestamp stopTime;
    private int sucesssfullBeers;
    private int failedBeers;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Beers getBeerId() {
        return beerId;
    }

    public void setBeerId(Beers beerId) {
        this.beerId = beerId;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getStopTime() {
        return stopTime;
    }

    public void setStopTime(Timestamp stopTime) {
        this.stopTime = stopTime;
    }

    public int getSucesssfullBeers() {
        return sucesssfullBeers;
    }

    public void setSucesssfullBeers(int sucesssfullBeers) {
        this.sucesssfullBeers = sucesssfullBeers;
    }

    public int getFailedBeers() {
        return failedBeers;
    }

    public void setFailedBeers(int failedBeers) {
        this.failedBeers = failedBeers;
    }
}
