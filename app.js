// PACKAGES REQUIRED
const inquirer = require("inquirer");
var mysql = require("mysql");


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
        // SWITCH THAT WILL ALLOW MANAGER TO CHOOSE ACTION ITEM NEEDED
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
function view(){
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
        // SWITCH THAT WILL ALLOW MANAGER TO CHOOSE ACTION ITEM NEEDED
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

// ADD PROMT FUNCTIONS
function add(){
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
        // SWITCH THAT WILL ALLOW MANAGER TO CHOOSE ACTION ITEM NEEDED
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
// UPDATE PROMT FUNCITONS
function update(){
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What employee would you like to update",
            choices: [
                // Need to get employees from data
            ]
        }
    ]).then(function(answer) {
        updateEmployee();   
    });
};

// END APPLICATION FUNCTION
function endAPP(){
    console.log("Exit console -- actions are complete --")
};