package APIServer.Entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VibrationRepo extends JpaRepository<Vibration, Long> {
    List<Vibration> findByBatchId(Long batchId);
}
