package com.employee.ems.service;

import com.employee.ems.repository.LeaveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/Leave")
@Service
public class LeaveService {
    @Autowired
    LeaveRepo leaveRepo;

}
