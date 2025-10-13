package com.employee.ems.service;

import com.employee.ems.dto.EmployeeRequestDto;
import com.employee.ems.dto.EmployeeResponseDto;
import com.employee.ems.entity.Employees;
import com.employee.ems.repository.EmployeeRepo;
import com.employee.ems.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo employeerepo;

    public EmployeeResponseDto addEmployee(EmployeeRequestDto dto) {
        Employees employees = toEntity(dto);
        Employees saved = employeerepo.save(employees);
        return toResponseDto(saved);
    }


    public EmployeeResponseDto updateEmployee(Long id, EmployeeRequestDto dto) {
        Employees employees = employeerepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));

        // update fields
        employees.setFirst_name(dto.getFirst_name());
        employees.setLast_name(dto.getLast_name());
        employees.setGender(dto.getGender());
        employees.setEmail(dto.getEmail());
        employees.setPhone(dto.getPhone());
        employees.setDepartment(dto.getDepartment());
        employees.setDesignation(dto.getDesignation());
        employees.setSalary(dto.getSalary());
        employees.setJoin_date(LocalDate.parse(dto.getJoin_date()));

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


    public void deleteAllEmployees() {
        employeerepo.deleteAll();

    }


    //  Entity -> ResponseDTO Mapper
    private EmployeeResponseDto toResponseDto(Employees employees) {
        EmployeeResponseDto dto = new EmployeeResponseDto();
        dto.setEmp_id(employees.getEmp_id());
        dto.setFirst_name(employees.getFirst_name());
        dto.setLast_name(employees.getLast_name());
        dto.setGender(employees.getGender());
        dto.setEmail(employees.getEmail());
        dto.setPhone(employees.getPhone());
        dto.setDepartment(employees.getDepartment());
        dto.setDesignation(employees.getDesignation());
        dto.setSalary(employees.getSalary());
        dto.setJoin_date(String.valueOf(employees.getJoin_date()));

        if (employees.getJoin_date() != null) {
            dto.setJoin_date(String.valueOf(employees.getJoin_date()));
        } else {
            dto.setJoin_date(null);  // or set a default like "N/A"
        }
        //  dto.setJoin_date(employees.getJoin_date().format(formatter));
        return dto;
    }

    // DTO -> Entity Mapper
    private Employees toEntity(EmployeeRequestDto dto) {
        Employees employees = new Employees();
        employees.setFirst_name(dto.getFirst_name());
        employees.setLast_name(dto.getLast_name());
        employees.setGender(dto.getGender());
        employees.setEmail(dto.getEmail());
        employees.setPhone(dto.getPhone());
        employees.setDepartment(dto.getDepartment());
        employees.setDesignation(dto.getDesignation());
        employees.setSalary(dto.getSalary());
        employees.setJoin_date(LocalDate.parse(dto.getJoin_date()));
        //  employees.setJoin_date(LocalDate.parse(dto.getJoin_date(), formatter));
        return employees;
    }


}


