package com.employee.ems.dto;


import lombok.Data;

import java.time.Month;

@Data
public class PayRollRequestDto {


    private Month month;
    private Double salary;
    private double deduction;
    private double net_salary;

}
