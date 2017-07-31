import { takeEvery,put,select }        from 'redux-saga/effects'
import authService                     from '../services/authService'

  const name = `auth`

  function* processLogin({ payload }) {
    try {
      const result = yield authService(payload)

      if (result) {
        yield put({ type: processNameDone })
        // yield put({ type: types.SEED_SUCCESS, payload: result })
      }
    } catch (error) {
      // console.log(error)
      // yield put({ type: types.SEED_FAILED, payload: { error } })
    }
  }

  function* processLogout({ payload }) {
    try {
      const result = yield authService(payload)

      if (result) {
        yield put({ type: processNameDone })
        // yield put({ type: types.SEED_SUCCESS, payload: result })
      }
    } catch (error) {
      // console.log(error)
      // yield put({ type: types.SEED_FAILED, payload: { error } })
    }
  }

  function* sagaLogin() {
    yield takeEvery(types[processName], processLogin);
  }

  function* sagaLogout() {
    yield takeEvery(types[processName], processLogout);
  }

  const sagaList = [
    sagaLogin(),
    sagaLogout(),
  ]
}