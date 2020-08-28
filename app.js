const express = require('express'),
      connection = require('./database/config'),
      bodyParser = require('body-parser'),
      port = process.env.port||8000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public/public'));
// app.use(express.static(path.join(__dirname + 'public')));
// app.use('/public',express.static('/public'));
// app.use(express.static(__dirname + 'public'));

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
  const pembeli = {nm_pembeli: req.body.nama};
  connection.query('INSERT INTO pembeli SET ?', pembeli);
  res.render('landingPage');
});
  
app.listen(port, () => {
  console.log('Server is running at port 8000');
});