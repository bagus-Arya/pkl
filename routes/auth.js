var express = require('express');
var connection = require('../database/config');
var router = express.Router();

//auth user
// router.post('/authentication', function(req, res, next) {      
//     var email = req.body.email;
//     var password = req.body.password;
//         connection.query('SELECT * FROM pembeli WHERE email_pembeli = ? AND pass_pembeli = ?', [email, password], 
//         function(err, rows, fields) {
//             if(err) throw err          
//             // if user not found
//             if (rows.length <= 0) {
//                 req.flash('error', 'Please correct enter email and Password!')
//                 return res.redirect('/views/login')
//             }
//             else { // if user found
//                 req.session.loggedin = true;
//                 req.session.name = name;
//                 return res.redirect('/views/home');
//             }            
//         }) 
// });
// register user 
router.post('/user/register', function (req, res) {
    const pembeli = {nm_pembeli: req.body.nama, email_pembeli: req.body.email, pass_pembeli: req.body.password};
    connection.query('INSERT INTO pembeli SET ?', pembeli);
    // if (err) {
    //     req.flash('error', err)     
    //     res.render('register');
    // } else {                
    //     req.flash('success', 'You have successfully signup!');
    //     return res.redirect('/views/home');
    // }
    res.render('landingPage');
  });
//display home page
// router.get('/home', function(req, res, next) {
//     if (req.session.loggedin) {
         
//         res.render('home', {
//             title:"Dashboard",
//             nama: req.session.nama,     
//         });
 
//     } else {
//         req.flash('success', 'Please login first!');
//         return res.redirect('/views/login');
//     }
// });
// Logout user
// router.get('/user/logout', function (req, res) {
//     req.session.destroy();
//     req.flash('success', 'Login Again Here');
//     return res.redirect('/views/login');
//   });
module.exports = router;