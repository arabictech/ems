package com.employee.ems.dto;

import lombok.Data;

@Data
public class AttendanceResponseDto {
    private long att_id;
    private String status;
    private String date; //cause give dd-MM-yyyy
    private SimpleEmployeeDto simpleEmployeeDto;
}
