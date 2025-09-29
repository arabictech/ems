package com.employee.ems.service;

import com.employee.ems.entity.PayRoll;
import com.employee.ems.repository.PayRollRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class PayRollService {

    @Autowired
    private PayRollRepo payrollRepo;

    public PayRoll addPayment(PayRoll payRoll) {
        return payrollRepo.save(payRoll);

    }
}
