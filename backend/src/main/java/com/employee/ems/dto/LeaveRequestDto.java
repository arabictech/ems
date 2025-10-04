package com.employee.ems.dto;

import lombok.Data;

import java.time.LocalDate;
@Data
public class LeaveRequestDto {
    private String start_date;
    private String end_date;
    private String type;
    private String status;
}
