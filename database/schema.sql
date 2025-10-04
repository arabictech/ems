CREATE DATABASE IF NOT EXISTS employee_management;
USE employee_management;

-- USERS
CREATE TABLE users(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('Admin','Employee') NOT NULL
);


-- DEPARTMENTS
CREATE TABLE department(
	dept_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL 	
);


-- ROLES
CREATE TABLE roles(
	role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(100) NOT NULL 
);



-- EMPLOYEES
CREATE TABLE employees(
	emp_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15),
    dept_id INT,
    designation VARCHAR(100),
    salary DECIMAL(10,2),
    join_date DATE,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id),
    FOREIGN KEY (email) REFERENCES users(email)  
    ON UPDATE CASCADE
    ON DELETE CASCADE
);


-- ATTENDANCE
CREATE TABLE attendance(
		att_id INT AUTO_INCREMENT PRIMARY KEY,
        emp_id INT,
        date DATE,
        status ENUM('Present','Absent','Leave','Holiday') NOT NULL,
        FOREIGN KEY(emp_id) REFERENCES employees(emp_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


-- LEAVE TYPES
CREATE TABLE leave_types(
	type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(20) NOT NULL
);

 


-- LEAVES
CREATE TABLE leaves(
	leave_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,	
    leave_type_id INT NOT NULL,
    status ENUM('Pending','Approved','Rejected') DEFAULT 'Pending',
    FOREIGN KEY(emp_id) REFERENCES employees(emp_id),
    FOREIGN KEY(leave_type_id) REFERENCES leave_types(type_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);



-- PAYROLL
CREATE TABLE payroll(
	payroll_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    month VARCHAR(7),
    salary DECIMAL(10,2),
    deductions DECIMAL(10,2),
    net_salary DECIMAL(10,2),
    FOREIGN KEY(emp_id) REFERENCES employees(emp_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE 
);