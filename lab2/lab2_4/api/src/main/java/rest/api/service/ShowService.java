package rest.api.service;

import java.util.List;

import org.springframework.context.annotation.Bean;

import rest.api.Show;

public interface ShowService { 
  
    List<Show> findAll(); 
  
    String rdnQuote();

    String rdnQuotes(int i);

    
    @Bean
    void initDatabase(); 
}