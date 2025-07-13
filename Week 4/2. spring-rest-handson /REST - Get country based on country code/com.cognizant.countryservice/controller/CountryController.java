package com.cognizant.countryservice.controller;

import com.cognizant.countryservice.model.Country;
import com.cognizant.countryservice.service.CountryService;
import com.cognizant.countryservice.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/countries")
public class CountryController {

    private final CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> getCountry(@PathVariable String code) {
        try {
            Country country = countryService.getCountryByCode(code);
            return ResponseEntity.ok(country);
        } catch (CountryNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
