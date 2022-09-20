const Mysql         = require('mysql');
const Constants     = require("./constants");

var connection = Mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "hh",
	port: 3306,
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
