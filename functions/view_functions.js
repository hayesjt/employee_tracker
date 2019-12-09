import { createConnection } from "net";

function viewDepartment(){
    connection.query("SELECT * FROM department_table", function(err, result) {
        if (err) throw err;
    
        console.table(result);
      });
    }
