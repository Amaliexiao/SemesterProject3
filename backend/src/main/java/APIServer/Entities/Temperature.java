package APIServer.Entities;

import jakarta.persistence.*;

@Entity
public class Temperature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Long batchId;

    private int temperature;

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

    public int getTemp() {
        return temperature;
    }

    public void setTemp(int temp) {
        this.temperature = temp;
    }
}
