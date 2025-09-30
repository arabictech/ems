package com.employee.ems.service;

import com.employee.ems.entity.PayRoll;
import com.employee.ems.repository.PayRollRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayRollService {

    @Autowired
    private PayRollRepo payrollRepo;

    // Create Table And Insert Data In Table
    public PayRoll addPayment(PayRoll payRoll) {
//        double net = payRoll.getSalary() - payRoll.getDeduction();
//        payRoll.setNet_salary(net);
        return payrollRepo.save(payRoll);

    }

    // Get All Data From TAble
    public List<PayRoll> getMyAlldata() {
        return payrollRepo.findAll();
    }

    // Get Data From Table By Using ID
    public PayRoll getPayrollById(long id) {
        return payrollRepo.findById((int) id).get();
    }

    // Update Data In TAble
    public PayRoll updatePayroll(long id, PayRoll payRoll) {
//        double net = payRoll.getSalary() - payRoll.getDeduction();
//        payRoll.setNet_salary(net);
        return payrollRepo.save(payRoll);
    }

    //Delete Date From Table
    public void deletePayroll(long id) {
        payrollRepo.deleteById((int) id);
    }
}
