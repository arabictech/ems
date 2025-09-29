package com.employee.ems.service;

import com.employee.ems.entity.Employees;
import com.employee.ems.repository.Employeerepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private Employeerepo employeerepo;


    public Employees addEmployees( Employees employees) {
        return  employeerepo.save(employees);
    }

    public Employees getAllEmployee() {
       return employeerepo.findAll();
    }
}
