var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost" || "q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user:  "root" || "se6411lddxbli7gd",
  password: "123Mercutio456" || "frq202dgbyp25evw",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
