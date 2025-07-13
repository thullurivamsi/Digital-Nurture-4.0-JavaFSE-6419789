package com.cognizant.countryservice.service;

import com.cognizant.countryservice.model.Country;
import com.cognizant.countryservice.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class CountryService {

    private final List<Country> countries;

    @Autowired
    public CountryService(List<Country> countries) {
        this.countries = countries;
    }

    public Country getCountryByCode(String code) throws CountryNotFoundException {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country with code " + code + " not found"));
    }
}
