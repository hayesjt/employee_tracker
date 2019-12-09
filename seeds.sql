-- need to know what database we are using --
USE employee_tracker_database;

-- inserting 3 rows into department table --
INSERT INTO department_table (department_name)
VALUES ("Store Design");

INSERT INTO department_table (department_name)
VALUES ("Merchandising");

INSERT INTO department_table (department_name)
VALUES ("Fixture Design");

-- inserting 3 rows into role table --
INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Store Planner", 65000, 1);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Merchandiser", 45000, 2);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Fixture Designer", 55000, 3);

-- inserting 3 rows into employee table --
INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Micah", "Ebert", 1, NULL);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Haylee", "Thomas", 1, 1);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Blake", "Johnson", 3, NULL);