package com.cognizant.orm_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
	private static CountryService countryService;

	public static void main(String[] args) {


		try {
			ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
			countryService = context.getBean(CountryService.class);
			testGetAllCountries();
			testFindCountryByCode();
			testAddCountry();
			testUpdateCountry();
			testDeleteCountry();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static void testGetAllCountries() {
		LOGGER.info("Start");
		List<Country> countries = countryService.getAllCountries();
		LOGGER.debug("countries={}", countries);
		LOGGER.info("End");
	}

	private static void testFindCountryByCode() {
		LOGGER.info("Start");
		Country country = countryService.findCountryByCode("IN");
		LOGGER.debug("Country: {}", country);
		LOGGER.info("End");
	}

	private static void testAddCountry() {
		LOGGER.info("Start");
		Country newCountry = new Country();
		newCountry.setCode("JP");
		newCountry.setName("Japan");
		countryService.addCountry(newCountry);
		LOGGER.debug("Added Country: {}", newCountry);
		LOGGER.info("End");
	}

	private static void testUpdateCountry() {
		LOGGER.info("Start");
		countryService.updateCountry("JP", "Updated Japan");
		LOGGER.debug("Updated Country");
		LOGGER.info("End");
	}

	private static void testDeleteCountry() {
		LOGGER.info("Start");
		countryService.deleteCountry("JP");
		LOGGER.debug("Deleted Country");
		LOGGER.info("End");
	}
}
