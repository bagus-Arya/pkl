var express = require('express');
var connection = require('../database/config');
var router = express.Router();

// register user 
router.post('/user/register', function (req, res) {
    const pembeli = {nm_pembeli: req.body.nama, email_pembeli: req.body.email, pass_pembeli: req.body.password};
    connection.query('INSERT INTO pembeli SET ?', pembeli);
    res.render('landingPage');
  });
module.exports = router;