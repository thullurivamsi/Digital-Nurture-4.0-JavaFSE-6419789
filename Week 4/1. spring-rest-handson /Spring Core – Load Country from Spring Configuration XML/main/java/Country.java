package com.cognizant.Countries;

public class Country {
    private String countryName;

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getCountryName() {
        return countryName;
    }

    @Override
    public String toString() {
        return this.countryName;
    }
}
