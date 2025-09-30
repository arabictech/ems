package com.employee.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employees")  // ✅ lowercase, avoid conflicts
public class Employees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long emp_id;
    private String first_name;
    private  String last_name;
    private  String email;
    private String phone;
    private String dept;
    private String designation;
    private double salary;
    private Date join_date;


    // ✅ If you want reverse mapping:
   //  @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
   //  private List<Leave> leaves;

   //  @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
//private List<Attendance> attendances;
}
