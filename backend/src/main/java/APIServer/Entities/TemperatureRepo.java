package APIServer.Entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemperatureRepo extends JpaRepository<Temperature, Long> {
    List<Temperature> findByBatchId(Long batchId);
}
