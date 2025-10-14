package com.employee.ems.service;
import com.employee.ems.dto.LeaveRequestDto;
import com.employee.ems.dto.LeaveResponseDto;
import com.employee.ems.dto.SimpleEmployeeDto;
import com.employee.ems.entity.Employees;
import com.employee.ems.entity.Leave;
import com.employee.ems.repository.EmployeeRepo;
import com.employee.ems.repository.LeaveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class LeaveService {
    @Autowired
    LeaveRepo leaveRepo;
    @Autowired
    EmployeeRepo employeerepo;

    public LeaveResponseDto addLeaves(long emp_id, LeaveRequestDto leaveReqDto) {
        Employees employees = employeerepo.findById(emp_id)
                .orElseThrow(() -> new RuntimeException("User Not found"));

        Leave leave = new Leave();
        leave.setEmployees(employees);
        leave.setStart_date(LocalDate.parse(leaveReqDto.getStart_date()));
        leave.setEnd_date(LocalDate.parse(leaveReqDto.getEnd_date()));



        leave.setType(leaveReqDto.getType());
        leave.setStatus(leaveReqDto.getStatus());
        Leave saved = leaveRepo.save(leave);
        return MapToResponse(saved);
    }

    public List<LeaveResponseDto> getAllLeaves() {
        return leaveRepo.findAll()
                .stream()
                .map(this::MapToResponse)
                .collect(Collectors.toList());
    }


    public List<LeaveResponseDto> getLeavesByEmployee(long emp_Id) {
        return leaveRepo.findAll()
                .stream()
                .filter(l -> l.getEmployees().getEmp_id() == emp_Id)
                .map(this::MapToResponse)
                .collect(Collectors.toList());
    }

    private LeaveResponseDto MapToResponse(Leave leave) {
        LeaveResponseDto dto = new LeaveResponseDto();
        dto.setLeave_id(leave.getLeave_id());
        dto.setStart_date(String.valueOf(leave.getStart_date()));
        dto.setEnd_date(String.valueOf(leave.getEnd_date()));
        dto.setType(leave.getType());
        dto.setStatus(leave.getStatus());

        SimpleEmployeeDto leaveDto = new SimpleEmployeeDto(
                leave.getEmployees().getEmp_id(),
                leave.getEmployees().getFirst_name(),
                leave.getEmployees().getLast_name()
        );
        dto.setSimpleEmployeeDto(leaveDto);
        return dto;
    }
    public void delAllLeaves() {
        leaveRepo.deleteAll();
    }
    public void DelLeaveById(long empid) {
        if (!leaveRepo.existsById(empid)) {
            throw new RuntimeException("Employee not found with ID: " + empid);
        }
        leaveRepo.deleteById(empid);
    }
}




