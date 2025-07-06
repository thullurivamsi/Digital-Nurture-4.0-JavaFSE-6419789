package com.ormlearn.OrmLearn.service.springdata;

import com.ormlearn.OrmLearn.model.Employee;
import com.ormlearn.OrmLearn.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpringDataEmployeeService {
    @Autowired
    private EmployeeRepository repo;

    public Employee addEmployee(Employee emp) {
        return repo.save(emp);
    }
}
