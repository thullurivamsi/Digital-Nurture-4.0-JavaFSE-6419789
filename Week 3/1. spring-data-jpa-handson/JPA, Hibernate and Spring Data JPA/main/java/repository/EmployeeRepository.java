package com.ormlearn.OrmLearn.repository;

import com.ormlearn.OrmLearn.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
