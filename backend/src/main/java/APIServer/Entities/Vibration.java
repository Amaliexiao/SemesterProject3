package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Vibration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long batchId;

    private float vibration;

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

    public float getVib() {
        return vibration;
    }

    public void setVib(float vibration) {
        this.vibration = vibration;
    }
}
