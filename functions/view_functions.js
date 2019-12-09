

// VIEW FUNCITONS
function viewDepartment() {
    connection.query("SELECT * FROM department_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM role_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}

function viewEmployees() {
    connection.query("SELECT * FROM employee_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}