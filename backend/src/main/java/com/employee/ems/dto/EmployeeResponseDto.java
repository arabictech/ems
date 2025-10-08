package com.employee.ems.dto;

import lombok.Data;

@Data
public class EmployeeResponseDto {
    private long emp_id;
    private String first_name;
    private  String last_name;
    private  String email;
    private String phone;
    private String department;
    private String designation;
    private double salary;
    private String join_date;        //cause Convert into dd-MM-yyyy Format

  //  private  SimpleEmployeeDto simpleEmployeeDto;
}
