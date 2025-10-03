package com.employee.ems.controller;

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


  //  @PostMapping
//    public Attendance addAttendance(@RequestBody Attendance attendance){
//   return attendanceService.addAttendance(attendance);
//    }

    @PostMapping("{emp_id}")
    public  Attendance markAttendance(@PathVariable long emp_id,@RequestParam String status){

    }

    @GetMapping
    public List<Attendance> getAllAttendance(){
        return  attendanceService.getAllAttendance();
    }



}
