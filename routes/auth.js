var express = require('express');
var connection = require('../database/config');
var router = express.Router();

// register user 
router.post('/user/register', function (req, res) {
    const pembeli = {nm_pembeli: req.body.nama, username_pembeli: req.body.username, pass_pembeli: req.body.password};
    connection.query('INSERT INTO pembeli SET ?', pembeli);
    res.redirect('/home');
  });
// login
router.post('/user/login', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		connection.query('SELECT * FROM pembeli WHERE username_pembeli = ? AND pass_pembeli = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				return res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});
module.exports = router;