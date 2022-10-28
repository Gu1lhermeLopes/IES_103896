package api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.model.Movie;
import api.model.Quote;
import api.service.ApiService;


@RestController
@RequestMapping("/api")
public class QuoteController {


  @Autowired
  private ApiService service;


  @PostMapping("/add/movie")
  public Movie addMovie(@Validated @RequestBody Movie movie) {
      return service.saveMovie(movie);
  }
  @PostMapping("/add/quote/{movieId}")
  public ResponseEntity<Quote> addQuote(@PathVariable(value = "movieId") Long movieId, @RequestBody Quote quoteRequest) {
    return service.saveQuote(movieId, quoteRequest);
  }

  @GetMapping("/all/movies")
  public List<Movie> allMovies() {
      return service.getAllMovies();
  }

  @GetMapping("/all/quotes")
  public List<Quote> allQuotes() {
      return service.getAllQuotes();
  }

  @GetMapping("/quotes")
  public Quote quotes() {
      return service.getRandomQuote();
  }

  @GetMapping("/quotes/{movieId}")
  public Quote getRandomQuoteByMovieId(@PathVariable(value = "movieId") Long movielId) {
    return service.getRandomQuoteByMovieId(movielId);
  }

}
