package com.employee.ems.controller;

import com.employee.ems.dto.AttendanceRequestDto;
import com.employee.ems.dto.AttendanceResponseDto;
import com.employee.ems.entity.Attendance;
import com.employee.ems.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/attendance")
@CrossOrigin(origins="http://localhost:3000")
public class AttendanceController {

    @Autowired
    AttendanceService attendanceService;



    // ➤ Mark attendance for employee
    @PostMapping("/{empId}")
    public AttendanceResponseDto markAttendance(@PathVariable long empId,
                                                @RequestBody AttendanceRequestDto request) {
        return attendanceService.markAttendance(empId, request);
    }

    // ➤ Get all attendance
    @GetMapping
    public List<AttendanceResponseDto> getAllAttendance() {
        return attendanceService.getAllAttendance();
    }

    // ➤ Get attendance by employee
    @GetMapping("/employee/{empId}")
    public List<AttendanceResponseDto> getAttendanceByEmployee(@PathVariable long empId) {
        return attendanceService.getAttendanceByEmployee(empId);
    }


}
