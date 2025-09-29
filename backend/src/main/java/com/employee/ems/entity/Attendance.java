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
@Table(name = "attendance")   // ✅ lowercase
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long att_id;

    // ✅ proper relationship instead of raw long
    @ManyToOne
    @JoinColumn(name = "emp_id", nullable = false)
    private Employees employees;

    private Date date;
    private String status;
}
