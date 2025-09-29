package com.employee.ems.repository;

import com.employee.ems.entity.Employees;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Employeerepo  extends JpaRepository<Employees,Long> {
}
