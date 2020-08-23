const express = require('express');
const port = process.env.port||8000;

const app = express();

app.set('view engine', 'ejs');
 
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
 
app.listen(port, () => {
  console.log('Server is running at port 8000');
});