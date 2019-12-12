module.exports = {

    selectRoles: () =>
        `SELECT role_table.title, role_table.salary, department_table.department_name 
        FROM role_table 
        INNER JOIN department_table ON role_table.dep_ID = department_table.ID;`,

    selectEmployee: (hello) => `SELECT ${hello}`
}

