package com.employee.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String email;
    private String phone;
    private String department;
    private String designation;
    private double salary;

<<<<<<< HEAD
   //@JsonFormat(shape = JsonFormat.Shape.STRING ,pattern = "dd-MM-yyyy")
   private LocalDate join_date;
=======
    //@JsonFormat(shape = JsonFormat.Shape.STRING ,pattern = "dd-MM-yyyy")
    // private LocalDate join_date;
>>>>>>> f5f9aef3bb52e28b61d8fd51fd9236ef7c34f34b


    //If i want reverse mapping:
    //  @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
    //  private List<Leave> leaves;

    //  @OneToMany(mappedBy = "employees", cascade = CascadeType.ALL)
//private List<Attendance> attendances;

}
