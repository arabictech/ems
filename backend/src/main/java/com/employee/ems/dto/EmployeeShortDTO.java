package com.employee.ems.dto;


import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeShortDTO {

        private Long emp_id;
        private Double salary;

        public EmployeeShortDTO(Long emp_id, Double salary) {
            this.emp_id = emp_id;
            this.salary = salary;
        }

}
