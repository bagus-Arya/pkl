const connection = require("./config");

connection.connect(function(err) {
    if (err) throw err;
    // tabel user
    let sqlcust = `CREATE TABLE user 
    (
        id_user INT(50) NOT NULL AUTO_INCREMENT,
        id_usaha INT(50),
        nm_user VARCHAR(50), 
        username_user VARCHAR(100),
        password_user VARCHAR(20),
        no_hp VARCHAR(15),
        jenis_kelamin VARCHAR(20),
        id_lokasi VARCHAR(200),
        PRIMARY KEY (id_user)
    )`;
    connection.query(sqlcust, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    // tabel usaha
    let sqlstore = `CREATE TABLE usaha
    (
        id_usaha int(50) NOT NULL AUTO_INCREMENT,
        id_user int(50) NOT NULL,
        nm_usaha VARCHAR(255),
        deskripsi_usaha VARCHAR(255),
        moto_usaha VARCHAR(200), 
        id_lokasi VARCHAR(255),
        telp VARCHAR(255), 
        PRIMARY KEY (id_usaha)
    )`;
    connection.query(sqlstore, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    // tabel produk
    let sqlpro = `CREATE TABLE produk 
    (
        id_produk VARCHAR(200) NOT NULL AUTO_INCREMENT, 
        nama_produk VARCHAR(50),
        harga int(255),
        jumlah_produk int(20),
        status VARCHAR(100),
        PRIMARY KEY (id_produk)
    )`;
    connection.query(sqlpro, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    // tabel order
    let sqlpesanan = `CREATE TABLE pesanan
    (
        id_order VARCHAR(100) NOT NULL, 
        id_user VARCHAR(50),
        id_usaha VARCHAR(200),
        no_order VARCHAR(50),
        id_produk VARCHAR(50),
        jumlah_order int(100),
        total_harga int(100),
        PRIMARY KEY (id_order)
    )`;
    connection.query(sqlpesanan, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    // tabel konfirmasi
    let sqlconfrm = `CREATE TABLE konfirmasi
    (
        id_oder VARCHAR(50) NOT NULL,
        tangal datetime
    )`;
    connection.query(sqlconfrm, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    // tabel status
    let sqlsts = `CREATE TABLE status 
    (
        id_status int(20) NOT NULL AUTO_INCREMENT,
        status VARCHAR(20), 
        PRIMARY KEY (id_status)
    )`;
    connection.query(sqlsts, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    // tabel lokasi
    let sqloc = `CREATE TABLE lokasi
    (
        id_lokasi int(50) NOT NULL AUTO_INCREMENT,
        lokasi VARCHAR(255), 
        PRIMARY KEY (id_lokasi)
    )`;
    connection.query(sqloc, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
