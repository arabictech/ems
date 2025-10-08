package com.employee.ems.repository;

import com.employee.ems.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

<<<<<<< HEAD:backend/src/main/java/com/employee/ems/repository/AttendanceRepo.java
public interface AttendanceRepo  extends JpaRepository<Attendance, Long> {
=======
public interface AttendenceRepo extends JpaRepository<Attendance, Long> {
>>>>>>> f5f9aef3bb52e28b61d8fd51fd9236ef7c34f34b:backend/src/main/java/com/employee/ems/repository/AttendenceRepo.java
}
