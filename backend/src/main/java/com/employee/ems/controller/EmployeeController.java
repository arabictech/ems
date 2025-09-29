package com.employee.ems.controller;

import com.employee.ems.entity.Employees;
import com.employee.ems.repository.Employeerepo;
import com.employee.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/employees")

public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public Employees addEmployees( @RequestBody Employees employees){
    return  employeeService.addEmployees(employees);


    }
}
