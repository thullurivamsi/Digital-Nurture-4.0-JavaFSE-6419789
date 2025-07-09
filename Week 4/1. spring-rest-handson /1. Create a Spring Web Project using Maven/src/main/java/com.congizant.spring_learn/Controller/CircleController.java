package com.cognizant.spring_learn.Controller;

import com.cognizant.spring_learn.Service.CircleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/circle")
public class CircleController {
    @Autowired
    private CircleService circleService ;

    @PostMapping
    public String setRadius(@RequestParam double radius) {
        this.circleService.setRadius(radius);
        return "The radius is set to " + radius ;
    }

    @GetMapping
    public String getCircle() {
        return this.circleService.toString() ;
    }

    @DeleteMapping
    public String clearCircle(){
        this.circleService.setRadius(0);
        return "The radius is reset to zero" ;
    }
}
