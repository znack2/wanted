// var toobusy = require('toobusy-js')
// var favicon = require('serve-favicon')

var pgSession = require('connect-pg-simple')(session)
// var methodOverride = require('method-override')
// var ejsEngine = require('ejs-mate')
// var Promise = require('bluebird')
//var MySQLStore = require('connect-mysql')({ session: session })

var expressValidator = require('express-validator')
// var connectAssets = require('connect-assets')
const lusca = require('lusca')
const sass = require('node-sass-middleware')
const multer = require('multer')
const secrets = require('./config/secrets')
const passportConfig = require('./config/passport')
require('dotenv').config()
var db = require('./models/sequelize')

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler())
  app.use(express.logger('dev'))
}
app.use(expressValidator())
app.enable("trust proxy")
app.use(compress())
app.use(express.cookieParser(cfg.sessionSecret))
app.use(multer({ dest: path.join(__dirname, 'uploads') }).single())
Promise.longStackTraces()


app.use(lusca({
  csrf: { angular: true },
  xframe: 'SAMEORIGIN',
  xssProtection: true
}))


app.use(function(req, res, next) {

  if (app.get('env') === 'development') {

  }

  res.locals.user = req.user
  res.locals.gaCode = secrets.googleAnalyticsCode
  next()

  //
  if (/api/i.test(req.path)) req.session.returnTo = req.path
  next()

  //
  res.cookie('XSRF-TOKEN', res.locals._csrf, {httpOnly: false})
  next()

  //
  var now = new Date().toString()
  var log = `${now}: ${req.method} ${req.url}`

  console.log(log)
  fs.appendFile('server.log', log + '\n')
  next()

  //
  if (req.path === '/api/upload') {
    next()
  } else {
    lusca.csrf()(req, res, next)
  }

  //
  res.locals.user = req.user
  next()

  // After successful login, redirect back to the intended page
  if (!req.user &&
    req.path !== '/login' &&
    req.path !== '/signup' &&
    !req.path.match(/^\/auth/) &&
    !req.path.match(/\./)) {
    req.session.returnTo = req.path
  } else if (req.user &&
    req.path == '/account') {
    req.session.returnTo = req.path
  }
  next()

  //
  res.status(404).render('404',{ selectedTheme: config.theme})

  //
  var err = new Error('Not Found')
  err.status = 404
  next(err)

  // catch ERRORS
  if (err.name === 'StatusError') {
    res.send(err.status, err.message)
  } else {
    next(err)
  }

  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })

  /* Avoid not responsing when server load is huge */
  if (toobusy()) {
    res.status(503).send("I'm busy right now, sorry. Please try again later.")
  } else {
    next()
  }

  //
  var err = new Error('Not Found')
  err.status = 404
  next(err)

  //
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })

  //
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })

  // After successful login, redirect back to the intended page
  if (!req.user &&
    req.path !== '/login' &&
    req.path !== '/signup' &&
    !req.path.match(/^\/auth/) &&
    !req.path.match(/\./)) {
    req.session.returnTo = req.path
  } else if (req.user &&
    req.path == '/account') {
    req.session.returnTo = req.path
  }
  next()

  //
  res.locals.user = req.user
  next()

  //
  console.log(err)
  res.status(err.status || 500)
  res.send(`Internal server error`)

  //
  if (req.path === '/api/upload') {
    next()
  } else {
    lusca.csrf()(req, res, next)
  }
})


//loadUser
// import { User } from 'models'
//
// module.exports = function(req, res, next) {
//   req.user = res.locals.user = null
//
//   if (!req.session.user) return next()
//
//   User.findById(req.session.user, function(err, user) {
//     if (err) return next(err)
//
//     req.user = res.locals.user = user
//     next()
//   })
// }




app.route('/api/items').get(function(req,res){
  res.status(200).json(items)
  // res.render('index.hbs',{
  //year:new Date()->getFullYear()
  //})
  // res.end('...')
})




/*Create database*/
if(isThere.sync('./lib/database/') === false){
  fs.mkdirSync('./lib/database/')
}

//Socket.io Server
remoteControl.remoteControl()

//Scheduler
scheduler.schedule()

// Open App socket
if (config.port == "" || config.port == undefined ){
  var defaultPort = app.get('port')
  logger.warn('First run, Setup running on localhost:',{port: defaultPort})
  server.listen(parseInt(defaultPort))
  var url = 'http://localhost:'+defaultPort
  open(url)

} else{
  var message = "MediacenterJS listening on port:" + config.port + "\n"
  logger.info(message)
  server.listen(parseInt(config.port))
}

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' })

const upload = multer({ dest: path.join(__dirname, 'uploads') })

app.set('port', (process.env.PORT || 80))
var port = process.env.PORT || 3001
app.set('port', process.env.PORT || 3000)

function safeRedirectToReturnTo(req, res) {
  var returnTo = req.session.returnTo || '/'
  delete req.session.returnTo
  res.redirect(returnTo)
}


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('Hello World\n')
// }).listen(8080, '37.139.19.242')
//
// console.log('Server running at http://37.139.19.242:8080/')

// http.createServer(app).listen(port, function (err) {
//   console.log('listening in http://localhost:' + port)
// })


//
// db
//   .sequelize
//   .sync({ force: false })
//   .then(function() {
//     app.listen(app.get('port'), function() {
//       console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'))
//     })
//   })










