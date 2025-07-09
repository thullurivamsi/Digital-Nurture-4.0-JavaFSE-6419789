package com.cognizant.spring_learn.Service;

import com.cognizant.spring_learn.Model.Circle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class CircleService {
    @Autowired
    private Circle circle ;
    private final double pi = 22.0/7 ;

    public void setRadius(double radius) {
        this.circle.setRadius(radius);
    }

    public double getRadius() {
        return this.circle.getRadius();
    }

    public double getCircumference() {
        return 2 * this.pi * this.getRadius() ;
    }

    public double getArea() {
        return this.pi * this.getRadius() * this.getRadius();
    }

    public String toString() {
        return "Radius : " + this.getRadius() + "\n" +
                "Circumference : " + this.getCircumference() + "\n" +
                "Area : " + this.getArea() + "\n" ;
    }
}
