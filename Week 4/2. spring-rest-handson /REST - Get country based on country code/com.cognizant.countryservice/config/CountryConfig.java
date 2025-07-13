package com.cognizant.countryservice.config;

import com.cognizant.countryservice.model.Country;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class CountryConfig {

    @Bean
    public List<Country> countries() {
        return Arrays.asList(
                new Country("IN", "India"),
                new Country("US", "United States"),
                new Country("DE", "Germany"),
                new Country("JP", "Japan"),
                new Country("AU", "Australia")
        );
    }
}
