var express = require('express');
var modules = require('./modules');
var connection = require('../database/config');
var router = express.Router();

// User
  // ke halaman home
router.get('/', function(request, response, next) {
    response.render('landingPage');
  });
  // ke halaman home
router.get('/home', modules.redirectLogin, function (request, response){
  if (request.session.loggedin) {  
      return response.render('home', {
        userId: request.session.userId,
        nama: request.session.nama,
        messages: request.flash('success')
      });   
  } else {
    response.redirect('/login');
  }
});
  // ke halaman login
router.get('/login', modules.redirectHome, function (request, response){
  response.render('login');
});
  // ke halaman register
router.get('/register', modules.redirectHome, function(request, response) {
    response.render('register');
  });
  // ke halaman view product
router.get('/productView', function(request, response) {
    if (request.session.loggedin) {       
      response.render('productView', {userId: request.session.userId});
    } else {
      response.redirect('/login');
    }
});
  // ke halaman user Profil
router.get('/profil/:userId', function(request, response) {
    if (request.session.loggedin) {       
      response.render('profilEdit', {
        userId: request.session.userId,
        titleProfil : 'Profil Anda',
        nama: request.session.nama
      });
    } else {
      response.redirect('/login');
    }
});
  // Route Percobaan tampilan
router.get('/perulangan', function(request, response) {
    response.render('perulangan');
});
// Mitra dagang
  // ke halaman join mitra dagang
router.get('/joinMitra', modules.redirectLogin, function(request, response) {
  if (request.session.loggedin) {       
    response.render('jadiMitra', {userId: request.session.userId});
  } else {
    response.redirect('/login');
  }
});
  // ke halaman Upload produk mitra dagang
router.get('/uploadProduct', function(request, response) {
  response.render('uploadProduct');
});
  // ke halaman view produk mitra dagang
router.get('/mitra/productView/:userId', function(request, response) {
  if (request.session.loggedin) {
    const getId = request.params.userId;
    connection.query('SELECT user.nm_user, usaha.nm_usaha FROM user INNER JOIN usaha on user.id_user = usaha.id_user WHERE user.id_user = ?',[getId],(err, rows) => {
      if (err) throw err;
      console.log(getId)
      response.render('productView-mitra',{
        titleUsaha : 'List Usaha Anda',
        titleProduk : 'List Produk Anda',
        userId: request.session.userId,
        user : rows,
        nama: request.session.nama //jika me-request req.session.username maka ditampung di variable username
      });
    });
  } else {
    response.render('jadiMitra');
  }
});
  // ke halaman view order mitra dagang
router.get('/mitra/orderView/:userId', function(request, response) {
  if (request.session.loggedin) {
    const getId = request.params.userId;
    connection.query('SELECT user.nm_user, usaha.nm_usaha FROM user INNER JOIN usaha on user.id_user = usaha.id_user WHERE user.id_user = ?',[getId],(err, rows) => {
      if (err) throw err;
      console.log(getId)
      response.render('orderView-mitra',{
        titleOrder : 'List Orderan Anda',
        userId: request.session.userId,
        user : rows,
        nama: request.session.nama //jika me-request req.session.username maka ditampung di variable username
      });
    });
  } else {
    response.render('jadiMitra');
  }
});

module.exports = router;