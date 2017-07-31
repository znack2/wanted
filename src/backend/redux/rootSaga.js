import { all }              from 'redux-saga/effects'


import app                  from './app'
import db                   from './db'
// import doc                  from './doc'
import email                from './email'
import error                from './error'
// import file                 from './file'
import log                  from './log'
import push                 from './push'


export default function* () {
  yield all([
    ...app.sagaList,
    ...db.sagaList,
    ...email.sagaList,
    ...error.sagaList,
    ...log.sagaList,
    ...push.sagaList,
  ])
}

// ...doc.sagaList,
// ...file.sagaList,