const express = require('express'),
      bodyParser = require('body-parser'),
      port = process.env.port||8000;
const app = express();
const path = require('path');

// engine setup
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log('Server is running at port 8000');
});

// module.exports = app;