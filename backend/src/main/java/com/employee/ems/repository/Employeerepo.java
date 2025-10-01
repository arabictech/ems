package com.employee.ems.repository;

import com.employee.ems.entity.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Employeerepo  extends JpaRepository<Employees,Long> {
   // Employees UpdateById(Long id);
}
