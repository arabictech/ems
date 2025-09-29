package com.employee.ems.controller;

import com.employee.ems.entity.PayRoll;
import com.employee.ems.service.PayRollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payroll")
public class PayrollController {

    @Autowired
    private PayRollService payRollService;

    @PostMapping
    public PayRoll addPayroll(@RequestBody PayRoll payRoll) {
        return payRollService.addPayment(payRoll);
    }
}
