package rest.api.service;

import java.util.*;
import java.lang.Math;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import rest.api.*;
@Service
public class ShowServiceImpl implements ShowService {

    @Autowired
    private ShowRepository repository; 


    @Override
    @Bean
	public void initDatabase() {
        repository.save(new Show(   "show0",  new ArrayList<String>( Arrays.asList("Quote0.1", "Quote0.2", "Quote0.3")) ));
        repository.save(new Show(   "show1",  new ArrayList<String>( Arrays.asList("Quote1.1", "Quote2.2", "Quote2.3")) ));
		repository.save(new Show(   "show2",  new ArrayList<String>( Arrays.asList("Quote2.1", "Quote2.2", "Quote2.3")) ));
	}


    @Override
    public List<Show> findAll() {
        List<Show> list = repository.findAll();
        return list;
    }


    @Override
    public String rdnQuote() {
        //get a rdm show
        List<Show> list = repository.findAll();
        int max=list.size()-1;
        Double n= Math.random() * (max + 1); 
        int i= n.intValue();
        Show s=list.get(i);
        //get a rdm quote
        max=s.getQuoteslen()-1;
        n= Math.random() * (max + 1); 
        i= n.intValue();
        return s.getOneQuote(i);
    }

    @Override
    public String rdnQuotes(int id) {
        List<Show> list = repository.findAll();
        Show s=list.get(id);
        //Show s= repository.findById(id)
        //    .orElseThrow(() -> new ShowNotFoundException(id));
        //get a rdm quote
        int max=s.getQuoteslen()-1;
        Double n= Math.random() * (max + 1); 
        int i= n.intValue();
        return s.getOneQuote(i);
    }


    
}
