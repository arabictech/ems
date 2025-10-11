package com.employee.ems.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

<<<<<<< HEAD:backend/src/main/java/com/employee/ems/dto/PayRollResponseDto.java
=======

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
>>>>>>> 666f1c2ad8d08d83edf8e6be0dc7dcdd5866071e:backend/src/main/java/com/employee/ems/dto/PayRollResponseDTO.java
@Getter
@Setter
public class PayRollResponseDto {

    private int payroll_id;
    private String month;
    private double salary;
    private double deduction;
    private double net_salary;
    private PayRollEmployeeDto payroll_employee;


}
