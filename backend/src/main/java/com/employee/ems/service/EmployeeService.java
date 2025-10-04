package com.employee.ems.service;

import com.employee.ems.dto.EmployeeRequestDto;
import com.employee.ems.dto.EmployeeResponseDto;
import com.employee.ems.entity.Employees;
import com.employee.ems.repository.Employeerepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {
    @Autowired
    private Employeerepo employeerepo;

//    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

//    public EmployeeResponseDto addEmployees(EmployeeRequestDto dto) {
//        Employees employees = toEntity(dto);
//        Employees saved = employeerepo.save(employees);
//        return toResponseDto(saved);
//    }
    

    // Bulk insert
    // Single insert (existing method)
    public EmployeeResponseDto addEmployees(EmployeeRequestDto dto) {
        Employees employees = toEntity(dto);
        Employees saved = employeerepo.save(employees);
        return toResponseDto(saved);
    }

    // Bulk insert
    public List<EmployeeResponseDto> addEmployeesBulk(List<EmployeeRequestDto> dtos) {
        return dtos.stream()
                .map(dto -> addEmployees(dto)) // call single insert for each DTO
                .collect(Collectors.toList());
    }






    //  Entity -> ResponseDTO Mapper
    private EmployeeResponseDto toResponseDto(Employees employees) {
        EmployeeResponseDto dto = new EmployeeResponseDto();
        dto.setEmp_id(employees.getEmp_id());
        dto.setFirst_name(employees.getFirst_name());
        dto.setLast_name(employees.getLast_name());
        dto.setEmail(employees.getEmail());
        dto.setPhone(employees.getPhone());
        dto.setDepartment(employees.getDepartment());
        dto.setDesignation(employees.getDesignation());
      dto.setSalary(employees.getSalary());
      //  dto.setJoin_date(employees.getJoin_date().format(formatter));

        //dto.setJoin_date(employees.getJoin_date().format(formatter));
        return dto;
    }

    // DTO -> Entity Mapper
    private Employees toEntity(EmployeeRequestDto dto) {
        Employees employees = new Employees();
        employees.setFirst_name(dto.getFirst_name());
        employees.setLast_name(dto.getLast_name());
        employees.setEmail(dto.getEmail());
        employees.setPhone(dto.getPhone());
        employees.setDepartment(dto.getDepartment());
        employees.setDesignation(dto.getDesignation());
        employees.setSalary(dto.getSalary());
      //  employees.setJoin_date(LocalDate.parse(dto.getJoin_date(), formatter));
        return employees;
    }



    public EmployeeResponseDto updateEmployee(Long id, EmployeeRequestDto dto) {
        Employees employees = employeerepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));

        // update fields
        employees.setFirst_name(dto.getFirst_name());
        employees.setLast_name(dto.getLast_name());
        employees.setEmail(dto.getEmail());
        employees.setPhone(dto.getPhone());
        employees.setDepartment(dto.getDepartment());
        employees.setDesignation(dto.getDesignation());
       // employees.setSalary(dto.getSalary());
       // employees.setJoin_date(LocalDate.parse(dto.getJoin_date(), formatter));

        Employees updated = employeerepo.save(employees);
        return toResponseDto(updated);
    }


    public List<EmployeeResponseDto> getAllEmployees() {
        return employeerepo.findAll()
                .stream()
                .map(this::toResponseDto)
                .collect(Collectors.toList());
    }

    //  Get Employee by ID
    public EmployeeResponseDto getEmployeeById(Long id) {
        Employees employees = employeerepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
        return toResponseDto(employees);
    }

    //  Delete Employee
    public void deleteEmployee(Long id) {
        if (!employeerepo.existsById(id)) {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
        employeerepo.deleteById(id);
    }







}

//    public void DelEmployee(Long id) {
//        employeerepo.deleteById(id);
//    }
//
//    public Employees updateEmployees(Employees employees) {
//        return  employeerepo.save(employees);
//    }

