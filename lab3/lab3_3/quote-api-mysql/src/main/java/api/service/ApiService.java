package api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import api.exception.ResourceNotFoundException;
import api.model.*;
import api.repository.MovieRepository;
import api.repository.QuoteRepository;

@Service
public class ApiService {

    @Autowired
    private MovieRepository movieRepository;
  
    @Autowired
    private QuoteRepository quoteRepository;



    //GET ALL
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public List<Quote> getAllQuotes() {
        return quoteRepository.findAll();
    }
    
    //SAVE
    public Movie saveMovie(Movie movie){
        return movieRepository.save(movie); 
    }

    public ResponseEntity<Quote> saveQuote(Long movieId,Quote quoteRequest) {
        Quote quote = movieRepository.findById(movieId).map(movie -> { quoteRequest.setMovie(movie);
          return quoteRepository.save(quoteRequest);
          }).orElseThrow(() -> new ResourceNotFoundException("Not found Movie with id = " + movieId));

        return new ResponseEntity<>(quote, HttpStatus.CREATED);
    }



    //RANDOM
    public Quote getRandomQuote() {
        int max=quoteRepository.findAll().size()-1;
        Double n= Math.random() * (max + 1); 
        Quote q=quoteRepository.findAll().get(n.intValue());
        return q;
    }

    public Quote getRandomQuoteByMovieId(Long movielId) {
        int max=quoteRepository.findByMovieId(movielId).size()-1;
        Double n= Math.random() * (max + 1); 
        Quote q = quoteRepository.findByMovieId(movielId).get(n.intValue());
        return q;
      }


}
