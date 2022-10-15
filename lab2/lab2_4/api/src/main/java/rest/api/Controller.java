package rest.api;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rest.api.service.ShowService;


@RestController
public class Controller {
	@Autowired private ShowService repository; 

	@GetMapping("/shows")
	List<Show> shows() {
		return repository.findAll();
	}

	@GetMapping("/quote")
	String quote() {
		return repository.rdnQuote();
	}

	@GetMapping("/quotes")
	String quotes(@RequestParam(required=true,defaultValue = "0") Integer show) {

		return repository.rdnQuotes(show);
	}
}
