package com.employee.ems.controller;

import com.employee.ems.entity.Employees;
import com.employee.ems.repository.Employeerepo;
import com.employee.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public Employees addEmployees( @RequestBody Employees employees) {
        return employeeService.addEmployees(employees);

    }

@GetMapping
    public  List<Employees> getAllEmployees(){
        return  employeeService.getAllEmployees();
}

@DeleteMapping("{id}")
    public  String DelEmployees(@PathVariable Long id){
    employeeService.DelEmployee(id);
        return "Employee Deleted";
}
@PutMapping("{id}")
    public  Employees  updateEmployees(@PathVariable Long id ,@RequestBody Employees employees){
        employees.setEmp_id(id);
       return  employeeService.updateEmployees(employees);
}
}
