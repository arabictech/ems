package com.employee.ems.controller;

import com.employee.ems.entity.Leave;
import com.employee.ems.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/leave")
@CrossOrigin(origins="http://localhost:3000")
public class LeaveController {
    @Autowired
    LeaveService leaveService;

    @PostMapping("/{emp_id}")
    public Leave applyLeaves(@PathVariable long emp_id,@RequestBody Leave leaveRequest){
        return  leaveService.addLeaves(emp_id,leaveRequest);
    }

    @GetMapping
    public List<Leave> getLeaves(){
        return  leaveService.getAllLeaves();
    }



}
