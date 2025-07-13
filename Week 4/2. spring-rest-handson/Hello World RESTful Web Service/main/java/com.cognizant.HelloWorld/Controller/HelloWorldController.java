package com.cognizant.HelloWorld.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloWorldController {
    private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class) ;
    @GetMapping
    public static String hello() {
        logger.info("Start");
        logger.info("End");
        return "Hello World!!" ;
    }
}
