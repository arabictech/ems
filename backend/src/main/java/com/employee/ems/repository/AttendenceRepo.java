package com.employee.ems.repository;

import com.employee.ems.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendenceRepo  extends JpaRepository<Attendance, Long> {
}
