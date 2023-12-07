package APIServer.Entities;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "CompletedBatches")
public class CompletedBatches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private Users userId;

    @ManyToOne
    @JoinColumn(name = "beertype")
    private Beers beerId;

    private Integer speed;
    private Integer size;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name ="startTime", nullable = false, updatable = false)
    private Date startTime;
    @CreationTimestamp
    @Column(name ="stopTime", nullable = false, updatable = false)
    private Date stopTime;

    @Column(name ="successful_beers", nullable = true)
    private Integer succesfulBeers;

    private Integer failedBeers;


    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public Users getUserId() {
        return userId;
    }

    public void setBeerId(Beers id) {
        this.beerId = id;
    }

    public Beers getBeerId() {
        return beerId;
    }

    public Date getStartTime() {
        return startTime;
    }
    public Date getStopTime() {
        return stopTime;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getSize() {
        return size;
    }

    public void setSpeed(Integer speed) {
        this.speed = speed;
    }

    public Integer getSpeed() {
        return speed;
    }

    public void setUser(Users user) {
        this.userId = user;
    }

}