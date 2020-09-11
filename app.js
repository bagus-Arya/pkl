const express = require('express'),
      bodyParser = require('body-parser'),
      port = process.env.port||8000;
const app = express()
const path = require('path')
const session = require('express-session')

// engine setup
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var sess = {
  name: 'sid',
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000, 
    sameSite: true,}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
  message: err.message,
  error: {}
  });
  });
  
app.use(session(sess))
// routes
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

// app.use('/', indexRouter);
app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log('Server is running at port 8000');
});

module.exports = app;
