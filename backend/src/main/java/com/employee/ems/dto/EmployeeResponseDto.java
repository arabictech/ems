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
<<<<<<< HEAD
    private String join_date;        //cause Convert into dd-MM-yyyy Format

  //  private  SimpleEmployeeDto simpleEmployeeDto;
=======
>>>>>>> f5f9aef3bb52e28b61d8fd51fd9236ef7c34f34b
}

