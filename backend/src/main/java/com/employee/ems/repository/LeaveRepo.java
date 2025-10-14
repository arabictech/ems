package com.employee.ems.repository;

import com.employee.ems.entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface LeaveRepo extends JpaRepository<Leave, Long> {

}
