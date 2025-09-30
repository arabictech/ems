package com.employee.ems.repository;

import com.employee.ems.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
<<<<<<< HEAD:backend/src/main/java/com/employee/ems/repository/AttendenceRepo.java
public interface AttendenceRepo  extends JpaRepository<Attendance, Long> {
=======
public interface PayRollRepo extends JpaRepository<PayRoll, Long> {
>>>>>>> b3281dabe78244a6c378218fa11de1beee9c6cd8:backend/src/main/java/com/employee/ems/repository/PayRollRepo.java
}
