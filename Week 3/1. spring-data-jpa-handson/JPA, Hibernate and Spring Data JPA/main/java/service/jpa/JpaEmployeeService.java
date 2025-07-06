package com.ormlearn.OrmLearn.service.jpa;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;
import org.springframework.stereotype.Service;
import com.ormlearn.OrmLearn.model.Employee;

@Service  
public class JpaEmployeeService {

    @PersistenceUnit  
    private EntityManagerFactory emf;

    public Integer addEmployee(Employee emp) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(emp);
            em.getTransaction().commit();
            return emp.getId();
        } finally {
            em.close();
        }
    }
}
