# employee_tracker
App in which a manager can look at all employees, their role, department, and other valuable information.

# Software_used
- mySQL
- SQL workbench
- node.js
- inquirer.js
- GitBash
- VS code

# Objective
Using the Gitbash console and inquirer I would like to promt the manager with a series of questions regarding their employees. They can either add someone new, view current employee information, or update the role of an exsisting employee.

# Table_layout

department:
id - INT PRIMARY KEY
name - VARCHAR(30) to hold department name

role:
id - INT PRIMARY KEY
title - VARCHAR(30) to hold role title
salary - DECIMAL to hold role salary
department_id - INT to hold reference to department role belongs to

employee:
id - INT PRIMARY KEY
first_name - VARCHAR(30) to hold employee first name
last_name - VARCHAR(30) to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager