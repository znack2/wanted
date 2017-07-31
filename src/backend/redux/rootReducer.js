import { combineReducers }  from 'redux'


import app                  from './app'
import db                   from './db'
// import doc                  from './doc'
import email                from './email'
import error                from './error'
// import file                 from './file'
import log                  from './log'
import push                 from './push'


export default combineReducers({
  app: app.reducer,
  db:   db.reducer,
  email:   email.reducer,
  error:   error.reducer,
  log:   log.reducer,
  push:   push.reducer,
})

// doc:   doc.reducer,
// file:   file.reducer,