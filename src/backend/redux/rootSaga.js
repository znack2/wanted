import { all }              from 'redux-saga/effects'


import app                  from './app'
import db                   from './db'


export default function* () {
  yield all([
    ...app.sagaList,
    ...db.sagaList,
  ])
}