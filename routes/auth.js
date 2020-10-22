'use strict';
var express = require('express'),
	connection = require('../database/config'),
	modules = require('./modules'),
	router = express.Router();

// register user 
router.post('/user/register', modules.redirectHome, function (request, response) {
    const user = {nm_user: request.body.nama, username_user: request.body.username, password_user: request.body.password, no_hp: request.body.no_hp, jenis_kelamin: request.body.jenis_kelamin}; // nama pada tabel:inputan dari sistem
    connection.query('INSERT INTO user SET ?', user);
    response.redirect('/home');
  });
// register mitra
router.post('/mitra/register', modules.redirectLogin, function (request, response) {
	if (request.session.loggedin = request.session.userId) {
	const mitra = {nm_usaha: request.body.namaUsaha, id_user: request.session.userId, moto_usaha: request.body.slogan}; // nama pada tabel:inputan dari sistem
    
	connection.query('INSERT INTO usaha SET ?', [mitra], function (err, results) {
		if (err) throw err;
		console.log(mitra)
		return response.redirect('/mitra/productView');
	});
	} else {
		console.log(mitra);
    	response.render('jadiMitra');
  	}
  });
// login user 
router.post('/user/login', modules.redirectHome, function(request, response) {
	let {username, password} = request.body;
	connection.query('SELECT * FROM user WHERE username_user = ? and password_user = ?', 
	[username, password], 
	function(err, results, fields) {
		if(err) throw err
		if (results.length <= 0) {		
			response.render('login');		
		} else {
			for(var i=0, len = results.length; i < len; i++){
				request.session.loggedin = true;
				request.session.userId = results[i].id_user;			
				request.session.nama = results[i].nm_user;			
				console.log(results[i].id_user, results[i].nm_user)
				request.flash('success', 'Anda Berhasil Masuk, Selamat Berbelanja ya')
				return response.redirect('/home');
			}
		}	
	});
});
// logout 
router.post('/logout', modules.redirectLogin, function (request, response) {
	if (request.session.loggedin) {
		request.session.destroy( error => {
			if (error) {
				return response.redirect('/home')
			}
			response.render('landingPage')
		})
	}
  });

module.exports = router;