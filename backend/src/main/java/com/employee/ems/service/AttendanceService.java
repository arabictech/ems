package com.employee.ems.service;

import com.employee.ems.entity.Attendance;
import com.employee.ems.entity.Employees;
import com.employee.ems.repository.AttendenceRepo;
import com.employee.ems.repository.Employeerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    AttendenceRepo attendenceRepo;
@Autowired
    Employeerepo employeerepo;
    public Attendance addAttendance(Attendance attendance) {
        // fetch existing emp from db
        Long empId = attendance.getEmployees().getEmp_id();
        Employees existingEmp = employeerepo.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found with id " + empId));

        // set manage Entity
        attendance.setEmployees(existingEmp);
        return attendenceRepo.save(attendance);
   }
    public List<Attendance> getAllAttendance() {
        return attendenceRepo.findAll();
    }
}
