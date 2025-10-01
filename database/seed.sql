-- seedfile


-- Departments

INSERT INTO departments(name) VALUES
('Human Resources'),
('Developer'),
('Analytics'),
('Marketing');


-- Leave Types

INSERT INTO leave_types(type_name) VALUES
('Sick'),
('Casual'),
('Paid');


-- Users

INSERT INTO users( user_id, username, email, password, role) VALUES
(1, 'admin', 'admin123@gmail.com', 'admin@123', 'Admin'),
(2, 'Aman', 'aman123@gmail.com', 'aman@123', 'Employee'),
(3, 'Naresh', 'naresh123@gmail.com', 'naresh@123', 'Employee');


-- Employees

INSERT INTO employees(emp_id, first_name, last_name, email, phone, dept_id, designation, salary, join_date) VALUES
(2, 'Solanki', 'aman', 'aman123@gmail.com', '9876543210', 2, 'Java Developer', 75000.00, '2025-09-01'),
(3, 'sirvi', 'naresh', 'naresh123@gmail.com', '9876543211', 2, 'React Developer', 85000.00, '2025-09-01');


-- Leaves

INSERT INTO leaves(emp_id, start_date, end_date, leave_type_id, status) VALUES
(2, '2025-11-01', '2025-11-03', 2, 'Approved'),
(3, '2025-09-20', '2025-09-22', 3, 'Rejected');


-- Payroll

INSERT INTO payroll(emp_id, month, salary, deductions, net_salary) VALUES
(2, '2025-09', 75000.00, 5000.00, 70000.00),
(3, '2025-09', 85000.00, 6000.00, 79000.00);
