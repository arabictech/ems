package com.employee.ems.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
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
