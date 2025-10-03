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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 224f70196b6f596fb7df1b3cbac2fb945d890935

    public Attendance addAttendance(Attendance attendance) {
        return attendenceRepo.save(attendance);
    }

<<<<<<< HEAD
@Autowired
    Employeerepo employeerepo;
<<<<<<< HEAD
//    public Attendance addAttendance(Attendance attendance) {
//        // fetch existing emp from db
//        Long empId = attendance.getEmployees().getEmp_id();
//        Employees existingEmp = employeerepo.findById(empId)
//                .orElseThrow(() -> new RuntimeException("Employee not found with id " + empId));
//
//        // set manage Entity
//        attendance.setEmployees(existingEmp);
//        return attendenceRepo.save(attendance);
//   }
=======
=======


=======
@Autowired
    Employeerepo employeerepo;
>>>>>>> d0d8f32f5ef1bc24e00a017d15496a683bf7b7cf

>>>>>>> 224f70196b6f596fb7df1b3cbac2fb945d890935

    public Attendance addAttendance(Attendance attendance) {
        // fetch existing emp from db
        Long empId = attendance.getEmployees().getEmp_id();
        Employees existingEmp = employeerepo.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found with id " + empId));

        // set manage entity
        attendance.setEmployees(existingEmp);
        return attendenceRepo.save(attendance);
   }

    public List<Attendance> getAllAttendance() {
        return attendenceRepo.findAll();
    }

}
