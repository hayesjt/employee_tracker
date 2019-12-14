module.exports = {

    selectViewDepartments: () =>
        `SELECT department_name FROM department_table`,

    selectViewRoles: () =>
        `SELECT role_table.title, role_table.salary, department_table.department_name 
        FROM role_table 
        INNER JOIN department_table ON role_table.dep_ID = department_table.ID;`,

    selectViewEmployees: () =>
        `SELECT employee_table.first_name, employee_table.last_name, role_table.title 
    FROM employee_table 
    INNER JOIN role_table ON employee_table.role_ID = role_table.ID;`,

    selectAddDepartment: (answer) =>
        `INSERT INTO department_table (department_name) VALUES ("${answer}");`,

    selectAddRole: (name, salary, id) =>
        `INSERT INTO role_table (title, salary, dep_ID) VALUES ("${name}","${salary}",${id});`,

    selectAddEmployee: (first, last, id) =>
        `INSERT INTO employee_table (first_name, last_name, role_ID) VALUES ("${first}","${last}",${id});`,

    selectEmployee: () =>
        `SELECT first_name, last_name FROM employee_table`,

    selectRoleID: () =>
        `SELECT ID, title FROM role_table`,

    updateEmployee: (role, first) =>
        `UPDATE employee_table SET role_ID = ${role[1]} WHERE first_name = "${first[0]}";`,
}

