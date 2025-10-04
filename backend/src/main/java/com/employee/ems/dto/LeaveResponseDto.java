package com.employee.ems.dto;

import lombok.Data;

@Data
public class LeaveResponseDto {
    private Long leave_id;
    private String start_date;
    private String end_date;
    private String type;
    private String status;
    private  SimpleEmployeeDto simpleEmployeeDto;
}
