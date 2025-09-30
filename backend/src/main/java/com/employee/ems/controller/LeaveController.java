package com.employee.ems.controller;

import com.employee.ems.entity.Leave;
import com.employee.ems.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/leave")
@CrossOrigin(origins="http://localhost:3000")
public class LeaveController {
    @Autowired
    LeaveService leaveService;


    @PostMapping
    public Leave add
}
