package com.employee.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employees")
public class Employees {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long emp_id;
    private String first_name;
    private String last_name;
    private  String  gender;
    private String email;
    private String phone;
    private String department;
    private String designation;
    private double salary;

   //@JsonFormat(shape = JsonFormat.Shape.STRING ,pattern = "dd-MM-yyyy")
   private LocalDate join_date;


}
