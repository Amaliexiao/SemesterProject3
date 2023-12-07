package APIServer.Entities;

import jakarta.persistence.*;

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
}
