package com.employee.ems.service;

import com.employee.ems.entity.Employees;
import com.employee.ems.repository.Employeerepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private Employeerepo employeerepo;


    public Employees addEmployees( Employees employees) {
        return  employeerepo.save(employees);
    }


    public List<Employees> getAllEmployees() {
        return employeerepo.findAll();
    }


    public void DelEmployee(Long id) {
        employeerepo.deleteById(id);
    }

    public Employees updateEmployees(Employees employees) {
        return  employeerepo.save(employees);
    }
}
