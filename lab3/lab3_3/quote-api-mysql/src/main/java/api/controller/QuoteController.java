package api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.exception.ResourceNotFoundException;
import api.model.Movie;
import api.model.Quote;
import api.repository.*;


@RestController
@RequestMapping("/api")
public class QuoteController {

  @Autowired
  private MovieRepository movieRepository;

  @Autowired
  private QuoteRepository quoteRepository;



  //CREATE MAPS
  @PostMapping("/create/movies")
  public Movie createMovie(@Validated @RequestBody Movie movie) {
      return movieRepository.save(movie);
  }


  @PostMapping("/create/quote/{movieId}")
  public ResponseEntity<Quote> createQuote(@PathVariable(value = "movieId") Long movieId, @RequestBody Quote quoteRequest) {
    Quote quote = movieRepository.findById(movieId).map(
      movie -> { quoteRequest.setMovie(movie);
      return quoteRepository.save(quoteRequest);
      }).orElseThrow(() -> new ResourceNotFoundException("Not found Movie with id = " + movieId));

    return new ResponseEntity<>(quote, HttpStatus.CREATED);
  }

  //SHOW ALL MAPS
  @GetMapping("/all/movies")
  public List<Movie> getAllMovies() {
      return movieRepository.findAll();
  }

  @GetMapping("/all/quotes")
  public List<Quote> getAllQuotes() {
      return quoteRepository.findAll();
  }


//RANDOM MAPS
  @GetMapping("/quotes")
  public Quote getRandomQuote() {
      int max=quoteRepository.findAll().size()-1;
      Double n= Math.random() * (max + 1); 
      Quote q=quoteRepository.findAll().get(n.intValue());
      return q;
  }


  @GetMapping("/quotes/{movieId}")
  public Quote getRandomQuoteByMovieId(@PathVariable(value = "movieId") Long movielId) {
    int max=quoteRepository.findByMovieId(movielId).size()-1;
    Double n= Math.random() * (max + 1); 
    Quote q = quoteRepository.findByMovieId(movielId).get(n.intValue());
    return q;
  }




}
