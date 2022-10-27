package api.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import api.model.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Long> {
  List<Quote> findByMovieId(Long movieId);
  
  @Transactional
  void deleteByMovieId(long tutorialId);
}
