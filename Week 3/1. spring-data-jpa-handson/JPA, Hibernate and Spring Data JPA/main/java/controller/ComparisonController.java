package com.ormlearn.OrmLearn.controller;

import com.ormlearn.OrmLearn.model.Employee;
import com.ormlearn.OrmLearn.service.hibernate.HibernateEmployeeService;
import com.ormlearn.OrmLearn.service.jpa.JpaEmployeeService;
import com.ormlearn.OrmLearn.service.springdata.SpringDataEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ComparisonController {
    @Autowired
    private JpaEmployeeService jpaService;
    @Autowired private HibernateEmployeeService hibService;
    @Autowired private SpringDataEmployeeService springService;

    @PostMapping("/jpa")
    public Integer addViaJPA(@RequestBody Employee emp) {
        return jpaService.addEmployee(emp);
    }

    @PostMapping("/hibernate")
    public Integer addViaHibernate(@RequestBody Employee emp) {
        return hibService.addEmployee(emp);
    }

    @PostMapping("/spring-data")
    public Employee addViaSpringData(@RequestBody Employee emp) {
        return springService.addEmployee(emp);
    }
}
