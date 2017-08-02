import { all }              from 'redux-saga/effects'


import app                  from './app'
import db                   from './db'
import email                from './email'
import error                from './error'
import log                  from './log'
import push                 from './push'
import user                 from './user'
import response             from './response'
import check                from './check'
// import doc                  from './doc'
// import file                 from './file'


export default function* () {
  yield all([
    ...app.sagaList,
    ...db.sagaList,
    ...email.sagaList,
    ...error.sagaList,
    ...log.sagaList,
    ...push.sagaList,
    ...user.sagaList,
    ...response.sagaList,
    ...check.sagaList,
  ])
}

// ...doc.sagaList,
// ...file.sagaList,