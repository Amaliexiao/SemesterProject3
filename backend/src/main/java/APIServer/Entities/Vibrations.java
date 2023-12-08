package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Vibrations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long batchId;

    private int vibration;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Long getBatchId() {
        return batchId;
    }

    public void setBatchId(Long batchId) {
        this.batchId = batchId;
    }

    public int getVib() {
        return vibration;
    }

    public void setVib(int vibration) {
        this.vibration = vibration;
    }
}
