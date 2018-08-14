const mysql = require('mysql');

let connection = mysql.createConnection({
    port: 8080,
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
        
    }
    console.log('connected as id ' + connection.threadId);
})

module.exports = connection;

