import { combineReducers }  from 'redux'


import app                  from './app'
import db                   from './db'


export default combineReducers({
  app: app.reducer,
  db:   db.reducer,
})
