package com.employee.ems.service;

import com.employee.ems.dto.PayRollEmployeeDto;
import com.employee.ems.dto.PayRollResponseDto;
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
     PayRollRepo payrollRepo;

    @Autowired
     Employeerepo employeesRepo;

    private static PayRollResponseDto getPayRollResponseDto(Employees existingEmp, PayRoll savedPayRoll) {
        PayRollEmployeeDto employeeDTO = new PayRollEmployeeDto(
                existingEmp.getEmp_id(),
                existingEmp.getSalary()
        );

        PayRollResponseDto responseDto = new PayRollResponseDto();
        responseDto.setPayroll_id(savedPayRoll.getPayroll_id());
        responseDto.setMonth(savedPayRoll.getMonth());
        responseDto.setSalary(savedPayRoll.getSalary());
        responseDto.setDeduction(savedPayRoll.getDeduction());
        responseDto.setNet_salary(savedPayRoll.getNet_salary());
        responseDto.setPayroll_employee(employeeDTO);
        return responseDto;
    }

    // Create Table And Insert Data In Table
    public PayRollResponseDto addPayment(PayRoll payRoll) {
        Long empId = payRoll.getEmployees() != null ? payRoll.getEmployees().getEmp_id() : null;

        if (empId == null) {
            throw new IllegalArgumentException("Employee ID is missing in the request.");
        }

        Employees existingEmp = employeesRepo.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + empId));

        double employeeSalary = existingEmp.getSalary();

        double netSalary = employeeSalary - payRoll.getDeduction();

        payRoll.setSalary(employeeSalary);
        payRoll.setNet_salary(netSalary);
        payRoll.setEmployees(existingEmp);

        PayRoll savedPayRoll = payrollRepo.save(payRoll);

        PayRollResponseDto responseDto = getPayRollResponseDto(existingEmp, savedPayRoll);

        return responseDto;
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
