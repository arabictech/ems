package com.employee.ems.service;

import com.employee.ems.entity.Employees;
import com.employee.ems.entity.Leave;
import com.employee.ems.repository.Employeerepo;
import com.employee.ems.repository.LeaveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


    @Service
    public class LeaveService {
        @Autowired
    LeaveRepo leaveRepo;
    @Autowired
    Employeerepo employeerepo;

    public Leave addLeaves(long emp_id,Leave leaverRequest) {
        Employees employees=employeerepo.findById(emp_id)
                .orElseThrow(()->new  RuntimeException("User Not found"));
        leaverRequest.setEmployees(employees);
        leaverRequest.setStatus("Pending");
        return  leaveRepo.save(leaverRequest);
    }
    public List<Leave> getAllLeaves() {
        return leaveRepo.findAll();
    }
}
