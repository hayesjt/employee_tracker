// PACKAGES REQUIRED
var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");
var express = require("express");
const {selectRoles, selectEmloyee} = require("./lib/queries");


// CONNECTING TO MYSQL
var connection = mysql.createConnection({
    host: "localhost",

    // PORT
    port: 3306,

    // USERNAME
    user: "root",

    // PASSWORD
    password: "Superhero500",
    database: "employee_tracker_database"
});

connection.connect(function (err) {
    if (err) throw err;
    startAPP();
});



// FIRST PROMPT FUNCITON
function startAPP() {
    // STARTING MESSAGE
    console.log("WELCOME TO THE EMPLOYEE TRACKER");
    console.log("--------------------------------");
    // PROMPTING MANAGER ACTION ITEMS LIST
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View departments, roles, or employees",
                "Add departments, roles, or employees",
                "Update exsisting employee role",
                "Nothing, I am done"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "View departments, roles, or employees":
                view();
                break;
            case "Add departments, roles, or employees":
                add();
                break;
            case "Update exsisting employee role":
                update();
                break;
            case "Nothing, I am done":
                endAPP();
                break;
        }
    });
};

// VIEW PROMPT FUNCTIONS
function view() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to view?",
            choices: [
                "Departments",
                "Roles",
                "Employees",
                "Back to main menu"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "Departments":
                viewDepartment();
                break;
            case "Roles":
                viewRoles();
                break;
            case "Employees":
                viewEmployees();
                break;
            case "Back to main menu":
                startAPP();
                break;
        }
    });
};

// VIEW FUNCITONS
function viewDepartment() {
    connection.query("SELECT * FROM department_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}

function viewRoles() {
    connection.query(selectRoles() , 
    function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
    };

function viewEmployees() {
    connection.query("SELECT * FROM employee_table", function (err, result) {
        if (err) throw err;

        console.table(result);
        startAPP();
    });
}

// ADD PROMT FUNCTIONS
function add() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to add?",
            choices: [
                "Department",
                "Role",
                "Employee",
                "Back to main menu"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "Department":
                addDepartment();
                break;
            case "Role":
                addRoles();
                break;
            case "Employee":
                addEmployees();
                break;
            case "Back to main menu":
                startAPP();
                break;
        }
    });
};

// ADD FUNCTIONS
function addDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?",
        },
    ]).then(function (answer) {
        connection.query("INSERT INTO department_table (department_name) VALUES ('" + answer.name + "');", function (err, result) {
            if (err) throw err;
            viewDepartment();
            startAPP()
        });
    });
};

function addRoles() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the title of this role?",
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary of this role (only enter a number, no comas)?",
        },
        {
            type: "number",
            name: "id",
            message: "What is the Department ID number (refer to department view)?",
        },
    ]).then(function (answers) {
        connection.query('INSERT INTO role_table (title, salary, dep_ID) VALUES ("' + answers.name + '",' + answers.salary + ',' + answers.id + ');' , function (err, result) {
            if (err) throw err;
            viewRoles();
            startAPP()
        });
    });
};

function addEmployees() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the first name of the Employee?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the last name of the Employee?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the employees role ID?",
        },
        {
            type: "input",
            name: "name",
            message: "Does this employee have a manager ID (if not, type null)?",
        },
    ]).then(function (answer) {
        connection.query("INSERT INTO department_table (department_name) VALUES ('" + answer.name + "');", function (err, result) {
            if (err) throw err;
            viewDepartment();
            startAPP()
        });
    });
};

// UPDATE PROMT FUNCITONS
function update() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What employee would you like to update",
            choices: [
                // Need to get employees from data
            ]
        }
    ]).then(function (answer) {
        updateEmployee();
        startAPP()
    });
};

// END APPLICATION FUNCTION
function endAPP() {
    console.log("Exit console -- actions are complete --")
};