-- deleting old data and recreating new database so we have good data to test -- 
DROP DATABASE IF EXISTS employee_tracker_database;
CREATE database employee_tracker_database;

-- signifying we are going to be using this databas --
USE employee_tracker_database;

-- creating the department table --
CREATE TABLE department_table (
  ID INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (ID)
);

-- creating the role table --
CREATE TABLE role_table (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  dep_ID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (dep_ID) REFERENCES department_table (ID)
);

-- creating the employee table -- 
CREATE TABLE employee_table (
  ID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_ID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (role_ID) REFERENCES role_table (ID),
);