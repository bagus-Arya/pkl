const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_dagang'
});

connection.connect((err) =>{
    if(!!err) console.log(err);
    else console.log('Connected!');
});
connection.end((err) => {
  });