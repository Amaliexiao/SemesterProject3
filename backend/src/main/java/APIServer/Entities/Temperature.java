package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Temperature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long batchId;

    private float temperature;

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

    public float getTemp() {
        return temperature;
    }

    public void setTemp(float temp) {
        this.temperature = temp;
    }
}
