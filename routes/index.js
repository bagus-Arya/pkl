var express = require('express');
var router = express.Router();

// User
  // ke halaman home
router.get('/', function(req, res) {
    res.render('landingPage');
  });
  // ke halaman home
router.get('/home', function (req, res){
    res.render('home');
  });
  // ke halaman login
router.get('/login', function (req, res){
  res.render('login');
});
  // ke halaman register
router.get('/register', function(req, res) {
    res.render('register');
  });
  // ke halaman view product
router.get('/productView', function(req, res) {
    res.render('productView');
  });

// Mitra dagang
  // ke halaman join mitra dagang
router.get('/joinMitra', function(req, res) {
    res.render('jadiMitra');
  });

  // ke halaman Upload produk mitra dagang
router.get('/uploadProduct', function(req, res) {
  res.render('uploadProduct');
});
  // ke halaman Upload produk mitra dagang
router.get('/mitra/productView', function(req, res) {
    res.render('productView-mitra');
  });
module.exports = router;