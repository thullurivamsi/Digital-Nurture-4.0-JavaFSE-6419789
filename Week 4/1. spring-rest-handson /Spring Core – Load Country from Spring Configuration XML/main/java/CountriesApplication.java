package com.cognizant.Countries;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

@SpringBootApplication
public class CountriesApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(CountriesApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(CountriesApplication.class, args);
		displayCountries();
	}

	public static void displayCountries() {
		LOGGER.info("START");

		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		List<Country> countries = (List<Country>) context.getBean("countryList");

		LOGGER.debug("Countries: {}", countries);

		LOGGER.info("END");
	}

}
