package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Vibrations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "batchId")
    private Batches batch;

    private int vibration;

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

    public int getVib() {
        return vibration;
    }

    public void setVib(int vibration) {
        this.vibration = vibration;
    }
}
