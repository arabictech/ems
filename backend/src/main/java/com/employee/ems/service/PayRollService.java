package com.employee.ems.service;

import com.employee.ems.dto.EmployeeShortDTO;
import com.employee.ems.dto.PayRollResponseDTO;
import com.employee.ems.entity.Employees;
import com.employee.ems.entity.PayRoll;
import com.employee.ems.repository.Employeerepo;
import com.employee.ems.repository.PayRollRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayRollService {

    @Autowired
    private PayRollRepo payrollRepo;

    @Autowired
    private Employeerepo employeesRepo;

    // Create Table And Insert Data In Table
    public PayRollResponseDTO addPayment(PayRoll payRoll) {
        Long empId = payRoll.getEmployees() != null ? payRoll.getEmployees().getEmp_id() : null;

        if (empId == null) {
            throw new IllegalArgumentException("Employee ID is missing in the request.");
        }

        Employees existingEmp = employeesRepo.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + empId));

        double net = existingEmp.getSalary() - payRoll.getDeduction();
        payRoll.setSalary(existingEmp.getSalary());
        payRoll.setNet_salary(net);
        payRoll.setEmployees(existingEmp);

        PayRoll savedPayRoll = payrollRepo.save(payRoll);

        EmployeeShortDTO employeeDTO = new EmployeeShortDTO(
                existingEmp.getEmp_id(),
                existingEmp.getSalary()
        );

        return new PayRollResponseDTO(
                savedPayRoll.getPayroll_id(),
                employeeDTO,
                savedPayRoll.getMonth(),
                savedPayRoll.getSalary(),
                savedPayRoll.getDeduction(),
                savedPayRoll.getNet_salary()
        );
    }

    // Get All Data From Table
    public List<PayRoll> getMyAllData() {
        return payrollRepo.findAll();
    }

    // Get Data From Table By Using ID
    public PayRoll getPayrollById(long id) {
        return payrollRepo.findById((int) id).get();
    }

    // Update Data In TAble
    public PayRoll updatePayroll(long id, PayRoll payRoll) {
        return payrollRepo.save(payRoll);
    }

    //Delete Date From Table
    public void deletePayroll(long id) {
        payrollRepo.deleteById((int) id);
    }
}

