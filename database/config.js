const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_dagang'
});

// connection.connect(); 
module.exports = connection;