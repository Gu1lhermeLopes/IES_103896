package api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import api.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
