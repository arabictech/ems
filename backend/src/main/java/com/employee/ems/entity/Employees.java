package com.employee.ems.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

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
    private  String last_name;
    private  String email;
    private String phone;
    private String department;
    private String designation;
    private double salary;

   //@JsonFormat(shape = JsonFormat.Shape.STRING ,pattern = "dd-MM-yyyy")
   private LocalDate join_date;


    //If i want reverse mapping:
   //  @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
   //  private List<Leave> leaves;

   //  @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
//private List<Attendance> attendances;

}
