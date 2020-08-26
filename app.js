const express = require('express');
const connection = require('./database/config');
const bodyParser = require('body-parser');
const port = process.env.port||8000;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route untuk halaman home
app.get('/',(req, res) => {
  res.render('landingPage');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/save',(req, res) => {
  const pembeli = { name: req.body.nama};
  connection.query('INSERT INTO tb_pembeli SET ?', pembeli, (err, res) => {
  if(err) throw err;
  console.log('Last insert ID:', res.insertId);
  res.redirect('/');
  });
});
  
app.listen(port, () => {
  console.log('Server is running at port 8000');
});