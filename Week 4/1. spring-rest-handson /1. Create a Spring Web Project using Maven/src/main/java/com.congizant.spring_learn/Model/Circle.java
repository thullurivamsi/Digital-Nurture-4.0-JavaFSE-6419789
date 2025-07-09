package com.cognizant.spring_learn.Model;

import org.springframework.stereotype.Component;

@Component
public class Circle {
    private double radius ;

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

}
