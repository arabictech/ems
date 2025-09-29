package com.employee.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

<<<<<<< HEAD
@SpringBootApplication
public class EmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsApplication.class, args);

	}
=======
import java.time.Month;
import java.time.MonthDay;

@SpringBootApplication
public class EmsApplication {

	public static <Payroll> void main(String[] args) {
		SpringApplication.run(EmsApplication.class, args);
        System.out.println("Employee Management System Started");

    }
>>>>>>> fa52d095795f6c2e06eca09c036cef095fa35605

}
