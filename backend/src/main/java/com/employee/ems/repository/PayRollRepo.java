package com.employee.ems.repository;

import com.employee.ems.entity.PayRoll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayRollRepo extends JpaRepository<PayRoll,Integer> {
}
