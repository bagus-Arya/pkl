const express = require('express'),
      bodyParser = require('body-parser'),
      port = process.env.port||8000;
// const flash = require('connect-flash');
// const flash = require('express-flash');
// const session = require('express-session');
var createError = require('http-errors');
const app = express();
const path = require('path');

// engine setup
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(flash());
// app.use(session({ 
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

// routes
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
// var insertRouter = require('./routes/insert');

app.use('/', indexRouter);
app.use('/auth', authRouter);
// app.use('/insert', insertRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
 
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(port, () => {
  console.log('Server is running at port 8000');
});

// module.exports = app;