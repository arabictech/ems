package com.employee.ems.repository;

import com.employee.ems.entity.PayRoll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayRollRepo extends JpaRepository<PayRoll, Long> {
}
