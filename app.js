'use strict';
const express = require('express'),
      bodyParser = require('body-parser'),
      port = process.env.port||8000,
      app = express(),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      flash = require('connect-flash'),
      session = require('express-session');

// engine setup
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

var sess = {
  name: 'sid',
  secret: 'N2rq&j=unVJ?kyArzSvm', //keyboard cat
  resave: false,
  saveUninitialized: true, // set true jika menambah cookie
  cookie: {
    maxAge: 1000 * 60 * 60 *2, 
    sameSite: true,}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, request, response, next) {
  response.status(err.status || 500);
  response.render('error', {
  message: err.message,
  error: {}
  });
});
  
app.use(session(sess))
app.use(flash())
// routes
var indexRouter = require('./routes/index', { mergeParams: true });
var authRouter = require('./routes/auth', { mergeParams: true });

// app.use('/', indexRouter);
app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use((request, response, next)=>{
  console.log(request.session);
  next()
});

app.listen(port, () => {
  console.log('Server is running at port 8000');
});

module.exports = app;
