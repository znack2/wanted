import passport           from 'passport'
import flash              from 'connect-flash'


import connectAuth       from '../tasks/connectAuth'


function initAuth(app,config) {
  app.use(flash())
  connectAuth(passport,config)
  app.use(passport.initialize())
  app.use(passport.session()) // persistent login sessions

  return passport
}

export default {
  initAuth,
}



