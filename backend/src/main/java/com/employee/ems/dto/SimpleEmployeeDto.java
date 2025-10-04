package com.employee.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SimpleEmployeeDto {
private  long emp_id;
private String first_name;
private  String last_name;
}
