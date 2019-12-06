// PACKAGES REQUIRED
const SQL = require("mysql");
const inquirer = require("inquirer");

// STARTING MESSAGE
console.log("WELCOME TO THE EMPLOYEE TRACKER");
console.log("--------------------------------");

// FIRST PROMPT FUNCITON
function startAPP() {
    return inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "What is the engineers name?"
            choices: []
        }
    ]).then(function (answers) {
        
(err) => {
            if (err)
                throw err;
        }
    )};

// NEED TO CALL TEAM FUNCTION AGAIN IN CASE THEY WANT TO KEEP ADDING EMPLOYEES

// PROMPTING MANAGER TO FILL OUT EMPLOYEE INFORMATION BEFORE WRITING A FILE

// SWITCH THAT WILL ALLOW MANAGER TO CHOOSE ACTION ITEM NEEDED

// END APPLICATION FUNCTION

// CALLING START FUNCITON 
