package com.employee.ems.service;

import com.employee.ems.dto.AttendanceRequestDto;
import com.employee.ems.dto.AttendanceResponseDto;
import com.employee.ems.dto.SimpleEmployeeDto;
import com.employee.ems.entity.Attendance;
import com.employee.ems.entity.Employees;

import com.employee.ems.repository.AttendanceRepo;
import com.employee.ems.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttendanceService {
//    @Autowired
//    AttendanceRepo attendanceRepo;
//
//    @Autowired
//    private EmployeeRepo employeerepo;
//
//    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
//
//    // ➤ Add attendance for employee
//    public AttendanceResponseDto markAttendance(long empId, AttendanceRequestDto request) {
//        Employees employee = employeerepo.findById(empId)
//                .orElseThrow(() -> new RuntimeException("Employee not found: " + empId));
//
//        Attendance attendance = new Attendance();
//        attendance.setEmployees(employee);
//        attendance.setStatus(request.getStatus());
//        attendance.setDate(LocalDate.parse(request.getDate(), formatter));
//
//        Attendance saved = attendanceRepo.save(attendance);
//
//        return mapToResponse(saved);
//        Employeerepo employeerepo;
//
//
//        public Attendance addAttendance (Attendance attendance){
//            // fetch existing emp from db
//            Long empId = attendance.getEmployees().getEmp_id();
//            Employees existingEmp = employeerepo.findById(empId)
//                    .orElseThrow(() -> new RuntimeException("Employee not found with id " + empId));
//
//            // set manage entity
//            attendance.setEmployees(existingEmp);
//            return attendenceRepo.save(attendance);
//        }
//
//        public List<Attendance> getAllAttendance () {
//            return attendenceRepo.findAll();
//        }
//
//        // ➤ Get all attendance records
//        public List<AttendanceResponseDto> getAllAttendance () {
//            return attendanceRepo.findAll()
//                    .stream()
//                    .map(this::mapToResponse)
//                    .collect(Collectors.toList());
//        }
//
//        // ➤ Get attendance by employee
//        public List<AttendanceResponseDto> getAttendanceByEmployee ( long empId){
//            return attendanceRepo.findAll()
//                    .stream()
//                    .filter(a -> a.getEmployees().getEmp_id() == empId)
//                    .map(this::mapToResponse)
//                    .collect(Collectors.toList());
//        }
//
//        // ➤ Convert Entity → ResponseDto
//        private AttendanceResponseDto mapToResponse (Attendance attendance){
//            AttendanceResponseDto dto = new AttendanceResponseDto();
//            dto.setAtt_id(attendance.getAtt_id());
//            dto.setStatus(attendance.getStatus());
//            dto.setDate(attendance.getDate().format(formatter));
//
//            SimpleEmployeeDto empDto = new SimpleEmployeeDto(
//                    attendance.getEmployees().getEmp_id(),
//                    attendance.getEmployees().getFirst_name(),
//                    attendance.getEmployees().getLast_name()
//            );
//            dto.setSimpleEmployeeDto(empDto);
//
//            return dto;
//        }

    }
