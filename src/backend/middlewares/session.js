import session            from 'cookie-session'
import cookieParser       from 'cookie-parser'
// var session = require('express-session')

/*
 * PRIVATE function
 */
function initSession(app,config) {
  app.use(cookieParser())
  app.use(session({
    secret: config.web.sessionSecret
  }))

  // app.use(express.session({
  //   secret: config.get('session:secret'),
  //   key: config.get('session:key'),
  //   cookie: config.get('session:cookie'),
  //   store: sessionStore
  // }));
}

export default {
  initSession,
}
// app.use(express.session({
//   secret: cfg.sessionSecret,
//   store: sessionStore
// }))

// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET,
//   store: new MongoStore({
//     url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
//     autoReconnect: true,
//     clear_interval: 3600
//   })
// }))


//PostgreSQL Store

// app.use(session({
//   store: new pgSession({
//     conString: secrets.postgres,
//     tableName: secrets.sessionTable
//   }),
//   secret: secrets.sessionSecret,
//   saveUninitialized: true,
//   resave: false,
//   cookie: {
//     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
//     httpOnly: true
//     //, secure: true // only when on HTTPS
//   }
// }))


//MySQL Store

// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: secrets.sessionSecret,
//   store: new MySQLStore({
//     config: secrets.mysql,
//     table: secrets.mysql.sessionTable
//   })
// }))