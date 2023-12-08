package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Humidities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long batchId;

    private int humidity;

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

    public int getHum() {
        return humidity;
    }

    public void setHum(int humidity) {
        this.humidity = humidity;
    }
}

