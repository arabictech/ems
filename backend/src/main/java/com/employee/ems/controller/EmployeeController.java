package com.employee.ems.controller;

import com.employee.ems.dto.EmployeeRequestDto;
import com.employee.ems.dto.EmployeeResponseDto;
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
    EmployeeService employeeService;

    @PostMapping
    public EmployeeResponseDto addEmployees(@RequestBody  EmployeeRequestDto dto) {
        return employeeService.addEmployees(dto);
    }

@GetMapping
    public  List<EmployeeResponseDto> getAllEmployees(){
        return  employeeService.getAllEmployees();
}

//get by id
    @GetMapping("{id}")
    public EmployeeResponseDto getEmployeeById(@PathVariable long id){
        return  employeeService.getEmployeeById(id);
    }

@DeleteMapping("{id}")
    public  String DelEmployees(@PathVariable Long id){
    employeeService.deleteEmployee(id);
        return "Employee Deleted";
}



@PutMapping("{id}")
    public  EmployeeResponseDto  UpdateEmployees(@PathVariable long id,@RequestBody EmployeeRequestDto dto){
        return employeeService.updateEmployee(id ,dto);
}
}
