package com.employee.ems.dto;

import com.employee.ems.entity.Employees;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.time.Month;

@Data
public class PayRollRequestDto {


    private Month month;
    private Double salary;
    private double deduction;
    private double net_salary;

}
