package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Temperatures {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "batchId")
    private Batches batch;

    private int temp;

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

    public int getTemp() {
        return temp;
    }

    public void setTemp(int temp) {
        this.temp = temp;
    }
}
