<<<<<<< HEAD
//package com.employee.ems.controller;
//
//import com.employee.ems.entity.PayRoll;
//import com.employee.ems.service.PayRollService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/payroll")
//public class PayrollController {
//
//    @Autowired
//    private PayRollService payRollService;
//
//
//    // Create Table And Insert Data In Table
//    @PostMapping
//    public PayRoll addPayroll(@RequestBody PayRoll payRoll) {
//        return payRollService.addPayment(payRoll);
//    }
//
//
//    // Get All Data From TAble
//    @GetMapping
//    public List<PayRoll> GetAllPayroll() {
//        return payRollService.getMyAlldata();
//    }
//
//
//    // Get Data From Table By Using ID
//    @GetMapping("/{id}")
//    public PayRoll getPayrollById(@PathVariable("id") long id) {
//        return payRollService.getPayrollById(id);
//    }
//
//    // Update Data In TAble
//    @PutMapping("/{id}")
//    public PayRoll updatePayroll(@PathVariable long id, @RequestBody PayRoll payRoll) {
//        payRoll.setPayroll_id(id);
//        return payRollService.updatePayroll(id, payRoll);
//
//    }
//
//    //Delete Date From Table
//    @DeleteMapping("/{id}")
//    public String deletePayroll(@PathVariable long id) {
//        payRollService.deletePayroll(id);
//        return "Deleted Payroll Successfully";
//    }
//
//
//}
=======
package com.employee.ems.controller;

import com.employee.ems.dto.PayRollResponseDTO;
import com.employee.ems.entity.PayRoll;
import com.employee.ems.service.PayRollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payroll")
public class PayrollController {

    @Autowired
    PayRollService payRollService;


    // Create Table And Insert Data In Table
    @PostMapping
    public PayRollResponseDTO addPayroll(@RequestBody PayRoll payRoll) {
        return payRollService.addPayment(payRoll);
    }

    // Get All Data From TAble
    @GetMapping
    public List<PayRoll> GetAllPayroll() {
        return payRollService.getMyAllData();
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
>>>>>>> ad5b61faf8189393e4e3adb29d8dc256eab1875f
