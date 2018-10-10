var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : process.env.DBHOST,
    user     : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.DBNAME,
    port : process.env.DBPORT
});

module.exports = pool;