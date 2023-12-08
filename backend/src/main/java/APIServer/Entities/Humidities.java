package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Humidities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "batchId")
    private Batches batch;

    private int humidity;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Batches getBatchId() {
        return batch;
    }

    public void setBatchId(Batches id) {
        this.batch = batch;
    }

    public int getHum() {
        return humidity;
    }

    public void setHum(int humidity) {
        this.humidity = humidity;
    }
}

