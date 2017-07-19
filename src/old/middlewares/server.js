

// var toobusy = require('toobusy-js');
// var favicon = require('serve-favicon');
// var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
// var methodOverride = require('method-override');
// var ejsEngine = require('ejs-mate');
// var Promise = require('bluebird');
//var MySQLStore = require('connect-mysql')({ session: session });
// var flash = require('express-flash');
var passport = require('passport');
var expressValidator = require('express-validator');
// var connectAssets = require('connect-assets');
const session = require('express-session');
const lusca = require('lusca');
const flash = require('express-flash');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');

require('dotenv').config();

/**
 * API keys and Passport configuration.
 */
const secrets = require('./config/secrets');
const passportConfig = require('./config/passport');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

const upload = multer({ dest: path.join(__dirname, 'uploads') });

app.set('port', (process.env.PORT || 80))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// catch ERRORS
app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler())
}




var port = process.env.PORT || 3001;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});


var db = require('./models/sequelize');


function safeRedirectToReturnTo(req, res) {
  var returnTo = req.session.returnTo || '/';
  delete req.session.returnTo;
  res.redirect(returnTo);
}

/* Avoid not responsing when server load is huge */
app.use(function(req, res, next) {
  if (toobusy()) {
    res.status(503).send("I'm busy right now, sorry. Please try again later.");
  } else {
    next();
  }
});


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(8080, '37.139.19.242');
//
// console.log('Server running at http://37.139.19.242:8080/');


// /**
//  * Error Handler.
//  */
// app.use(errorHandler());
//
// /**
//  * Start Express server.
//  */
// app.listen(app.get('port'), () => {
//   console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
// console.log('  Press CTRL-C to stop\n');
// });
//
// db
//   .sequelize
//   .sync({ force: false })
//   .then(function() {
//     app.listen(app.get('port'), function() {
//       console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
//     });
//   });










