package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Humidity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long batchId;

    private float humidity;

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

    public float getHum() {
        return humidity;
    }

    public void setHum(float humidity) {
        this.humidity = humidity;
    }
}

