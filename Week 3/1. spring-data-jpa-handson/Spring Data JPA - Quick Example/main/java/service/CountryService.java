package com.cognizant.orm_learn.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String countryCode) {
        return countryRepository.findById(countryCode).orElse(null);
    }

    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    @Transactional
    public void updateCountry(String code, String newName) {
        Country country = countryRepository.findById(code).orElse(null);
        if (country != null) {
            country.setName(newName);
            countryRepository.save(country);
        }
    }

    @Transactional
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }
}
