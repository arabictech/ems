package com.employee.ems.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class EmployeeResponseDto {
    @JsonProperty("emp_id")
    private long emp_id;

    @JsonProperty("first_name")
    private String first_name;

    @JsonProperty("last_name")
    private String last_name;

    private String email;
    private String phone;
    private String department;
    private String designation;
    private double salary;
}

