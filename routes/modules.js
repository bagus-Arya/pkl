// functions auth
const redirectLogin = (req, res, next) => {
    if (!req.session.loggedin) {
      res.render('login')
    } else {
      next()
    }
  }
  
const redirectHome = (req, res, next) => {
    if (req.session.loggedin) {
      res.render('home')
    } else {
      next()
    }
  } 

module.exports = {redirectLogin, redirectHome};