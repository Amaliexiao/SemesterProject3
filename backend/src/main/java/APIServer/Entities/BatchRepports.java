package APIServer.Entities;

import jakarta.persistence.*;

import java.util.Date;

public class BatchRepports {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "beerid")
    private Beers beer;

    private int speed;
    private int size;
    private Date startTime;
    private Date stopTime;
    private double heldStatesDuration;
    private int successfullBeers;
    private int failedBeers;
    private double lowtemp;
    private double meantemp;
    private double hightemp;
    private double lowhum;
    private double meanhum;
    private double highhum;
    private double lowvib;
    private double meanvib;
    private double highvib;

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

    public Beers getBeer() {
        return beer;
    }

    public void setBeer(Beers beer) {
        this.beer = beer;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getStopTime() {
        return stopTime;
    }

    public void setStopTime(Date stopTime) {
        this.stopTime = stopTime;
    }

    public double getHeldStatesDuration() {
        return heldStatesDuration;
    }

    public void setHeldStatesDuration(double heldStatesDuration) {
        this.heldStatesDuration = heldStatesDuration;
    }

    public int getSuccessfullBeers() {
        return successfullBeers;
    }

    public void setSuccessfullBeers(int successfullBeers) {
        this.successfullBeers = successfullBeers;
    }

    public int getFailedBeers() {
        return failedBeers;
    }

    public void setFailedBeers(int failedBeers) {
        this.failedBeers = failedBeers;
    }

    public double getLowtemp() {
        return lowtemp;
    }

    public void setLowtemp(double lowtemp) {
        this.lowtemp = lowtemp;
    }

    public double getMeantemp() {
        return meantemp;
    }

    public void setMeantemp(double meantemp) {
        this.meantemp = meantemp;
    }

    public double getHightemp() {
        return hightemp;
    }

    public void setHightemp(double hightemp) {
        this.hightemp = hightemp;
    }

    public double getLowhum() {
        return lowhum;
    }

    public void setLowhum(double lowhum) {
        this.lowhum = lowhum;
    }

    public double getMeanhum() {
        return meanhum;
    }

    public void setMeanhum(double meanhum) {
        this.meanhum = meanhum;
    }

    public double getHighhum() {
        return highhum;
    }

    public void setHighhum(double highhum) {
        this.highhum = highhum;
    }

    public double getLowvib() {
        return lowvib;
    }

    public void setLowvib(double lowvib) {
        this.lowvib = lowvib;
    }

    public double getMeanvib() {
        return meanvib;
    }

    public void setMeanvib(double meanvib) {
        this.meanvib = meanvib;
    }

    public double getHighvib() {
        return highvib;
    }

    public void setHighvib(double highvib) {
        this.highvib = highvib;
    }
}
