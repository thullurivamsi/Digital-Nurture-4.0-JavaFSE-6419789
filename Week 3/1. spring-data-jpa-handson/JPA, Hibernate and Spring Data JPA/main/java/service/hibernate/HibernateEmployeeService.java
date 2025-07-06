package com.ormlearn.OrmLearn.service.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Service;
import com.ormlearn.OrmLearn.model.Employee;

@Service
public class HibernateEmployeeService {

    private final SessionFactory factory;

    public HibernateEmployeeService() {
        this.factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Employee.class)
                .buildSessionFactory();
    }

    public Integer addEmployee(Employee emp) {
        Session session = factory.openSession();
        try {
            session.beginTransaction();
            Integer id = (Integer) session.save(emp);
            session.getTransaction().commit();
            return id;
        } finally {
            session.close();
        }
    }
}
