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
@CrossOrigin(origins = "http://localhost:3000")                        //dnt use if write config
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    //
//    @PostMapping
//    public EmployeeResponseDto addEmployees(@RequestBody  List<EmployeeRequestDto> dto) {
//        return employeeService.addEmployees((EmployeeRequestDto) dto);
//    }
<<<<<<< HEAD
//    @PostMapping("/bulk")
//    public List<EmployeeResponseDto> addEmployees(@RequestBody List<EmployeeRequestDto> dtos) {
//        return employeeService.addEmployeesBulk(dtos);
//    }

    @PostMapping
    public EmployeeResponseDto addEmployee(@RequestBody EmployeeRequestDto dto) {
        return employeeService.addEmployee(dto);
    }


@GetMapping
    public  List<EmployeeResponseDto> getAllEmployees(){
        return  employeeService.getAllEmployees();
}

//get by id
    @GetMapping("{id}")
    public EmployeeResponseDto getEmployeeById(@PathVariable long id){
        return  employeeService.getEmployeeById(id);
=======

    @PostMapping()
    public List<EmployeeResponseDto> addEmployees(@RequestBody List<EmployeeRequestDto> dtos) {
        return employeeService.addEmployeesBulk(dtos);
    }

    @GetMapping
    public List<EmployeeResponseDto> getAllEmployees() {
        return employeeService.getAllEmployees();
>>>>>>> f5f9aef3bb52e28b61d8fd51fd9236ef7c34f34b
    }

    //get by id
    @GetMapping("{id}")
    public EmployeeResponseDto getEmployeeById(@PathVariable long id) {
        return employeeService.getEmployeeById(id);
    }

    @DeleteMapping("{id}")
    public String DelEmployees(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "Employee Deleted";
<<<<<<< HEAD
}
    @DeleteMapping
    public String deleteAllEmployees() {
        employeeService.deleteAllEmployees();
        return "All Employees Deleted";
=======
>>>>>>> f5f9aef3bb52e28b61d8fd51fd9236ef7c34f34b
    }


    @PutMapping("{id}")
    public EmployeeResponseDto UpdateEmployees(@PathVariable long id, @RequestBody EmployeeRequestDto dto) {
        return employeeService.updateEmployee(id, dto);
    }
}
