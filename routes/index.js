var express = require('express');
var router = express.Router();

// ke halaman home
router.get('/', function(req, res) {
    res.render('landingPage');
  });
  // ke halaman login
router.get('/login', function (req, res){
    res.render('login');
  });
  // ke halaman register
router.get('/register', function(req, res) {
    res.render('register');
  });

module.exports = router;