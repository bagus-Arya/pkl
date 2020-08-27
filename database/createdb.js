const connection = require("./config");

connection.connect(function (err) {
    if(err) throw err;
    let sql = "CREATE DATABASE db_dagang";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});