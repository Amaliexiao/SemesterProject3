package APIServer.Entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HumidityRepo extends JpaRepository<Humidity, Long> {
    List<Humidity> findByBatchId(Long batchId);
}
