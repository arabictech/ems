package com.employee.ems.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "leaves")   //  renamed from "leave"
@Builder
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leave_id;
   // private  long emp_id;

    private LocalDate start_date;


    private LocalDate end_date;

    private String type;
    private String status;

    // relation to Employees
    @ManyToOne
    @JoinColumn(name = "emp_id", nullable = false)
    private Employees employees;
}
