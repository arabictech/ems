package com.employee.ems.service;

import com.employee.ems.entity.Attendance;
import com.employee.ems.entity.Employees;
import com.employee.ems.repository.AttendenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    AttendenceRepo attendenceRepo;

    public Attendance addAttendance(Attendance attendance) {
        return attendenceRepo.save(attendance);
    }

    public List<Attendance> getAllAttendance() {
        return attendenceRepo.findAll();
    }
}
