package com.employee.ems.repository;

import com.employee.ems.entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
@Repository
public interface LeaveRepo  extends JpaRepository<Leave, Long> {
=======
import java.util.List;
@Repository
public interface LeaveRepo extends JpaRepository<Leave, Long> {

  //  List<Leave> findByEmployeeId(long empId);

  //  Leave save(Leave leaverRequest);
>>>>>>> radha-updates
}
