package com.employee.ems.controller;

import com.employee.ems.dto.PayRollResponseDto;
import com.employee.ems.entity.Employees;
import com.employee.ems.entity.PayRoll;
import com.employee.ems.service.PayRollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.employee.ems.service.PayRollService.getPayRollResponseDto;

@RestController
@RequestMapping("/api/payroll")
public class PayrollController {

    @Autowired
    PayRollService payRollService;


    // Create Table And Insert Data In Table
    @PostMapping
    public PayRollResponseDto addPayroll(@RequestBody PayRoll payRoll) {
        return payRollService.addPayment(payRoll);
    }

    // Get All Data From TAble
    @GetMapping
    public List<PayRollResponseDto> getAllPayrolls() {
        List<PayRoll> payRollList = payRollService.getMyAllData();
        List<PayRollResponseDto> responseList = new ArrayList<>();

        for (PayRoll payRoll : payRollList) {
            Employees emp = payRoll.getEmployees();
            PayRollResponseDto dto = getPayRollResponseDto(emp, payRoll);
            responseList.add(dto);
        }

        return responseList;
    }


    // Get Data From Table By Using ID
    @GetMapping("/{id}")
    public PayRoll getPayrollById(@PathVariable("id") long id) {
        return payRollService.getPayrollById(id);
    }

    // Update Data In TAble
    @PutMapping("/{id}")
    public PayRoll updatePayroll(@PathVariable long id, @RequestBody PayRoll payRoll) {
        payRoll.setPayroll_id(id);
        return payRollService.updatePayroll(id, payRoll);

    }

    //Delete Date From Table
    @DeleteMapping("/{id}")
    public String deletePayroll(@PathVariable long id) {
        payRollService.deletePayroll(id);
        return "Deleted Payroll Successfully";
    }


}
