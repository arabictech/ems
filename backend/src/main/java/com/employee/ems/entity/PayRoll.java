package com.employee.ems.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Month;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "payroll")
public class PayRoll {

    // Payroll(payroll_id, emp_id, month, salary, deductions, net_salary)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long payroll_id;

    @ManyToOne
    @JoinColumn(name = "emp_id", nullable = false)
    private Employees employees;

    private Month month;

    private Double salary;
    private double deduction;
    private double net_salary;

}
