package com.employee.ems.dto;

import lombok.Data;

import java.time.LocalDate;

@Data

public class EmployeeRequestDto {
    private String first_name;
    private String last_name;
    private String email;
    private String phone;
    private String department;
    private String designation;
<<<<<<< HEAD
   private double salary;
    private String join_date;      //cause Convert into dd-MM-yyyy Format
 }
=======
    private double salary;
    //  private String join_date;  //cause Convert into dd-MM-yyyy Format
}
>>>>>>> f5f9aef3bb52e28b61d8fd51fd9236ef7c34f34b
