package APIServer.Entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HumidityRepo extends JpaRepository<Humidities, Long> {
}
