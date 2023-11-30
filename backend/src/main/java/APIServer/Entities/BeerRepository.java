package APIServer.Entities;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BeerRepository extends JpaRepository<Beers, Long> {
    Beers findByName(String name);
}
