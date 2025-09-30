package com.employee.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "leaves")   // ✅ renamed from "leave"
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leave_id;
   // private  long emp_id;
    private Date start_date;
    private Date end_date;
    private String type;
    private String status;

    // ✅ relation to Employees
    @ManyToOne
    @JoinColumn(name = "emp_id", nullable = false)
    private Employees employees;
}
