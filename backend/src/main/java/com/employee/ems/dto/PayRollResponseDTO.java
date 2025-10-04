package com.employee.ems.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Month;

@Getter
@Setter
public class PayRollResponseDTO {

    private Long payroll_id;
    private EmployeeShortDTO employees;
    private Month month;
    private Double salary;
    private Double deduction;
    private Double net_salary;

    public PayRollResponseDTO(Long payroll_id, EmployeeShortDTO employees, Month month,
                              Double salary, Double deduction, Double net_salary) {
        this.payroll_id = payroll_id;
        this.employees = employees;
        this.month = month;
        this.salary = salary;
        this.deduction = deduction;
        this.net_salary = net_salary;
    }

}
