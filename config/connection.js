var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "BentleyBear8!",
    database: "burgers_db"
  });
};
  
  // Make connection.
  connection.connect();
  
  // Export connection for our ORM to use.
  module.exports = connection;