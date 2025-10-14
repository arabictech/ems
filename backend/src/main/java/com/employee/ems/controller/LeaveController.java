package com.employee.ems.controller;

import com.employee.ems.dto.LeaveRequestDto;
import com.employee.ems.dto.LeaveResponseDto;
import com.employee.ems.entity.Leave;
import com.employee.ems.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/leave")
@CrossOrigin(origins = "http://localhost:3000")
public class LeaveController {
    @Autowired
    LeaveService leaveService;

    @PostMapping("/{emp_id}")
    public LeaveResponseDto applyLeaves(@PathVariable long emp_id, @RequestBody LeaveRequestDto leaveRequestDto) {
        return leaveService.addLeaves(emp_id, leaveRequestDto);
    }

    @GetMapping
    public List<LeaveResponseDto> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

@GetMapping("/{emp_Id}")
public List<LeaveResponseDto> getLeavesById(@PathVariable long emp_Id){
    return  leaveService.getLeavesByEmployee(emp_Id);
}

@DeleteMapping
 public String delAllLeaves(){
         leaveService.delAllLeaves();
         return  "Deleted All Leaves";
}
@DeleteMapping("/{empid}")
    public  String  delLeaveByEmpId(@PathVariable long empid){
        leaveService.DelLeaveById(empid);
        return  "Deleted";
}
}
