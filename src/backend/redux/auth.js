import { takeEvery,put,select }        from 'redux-saga/effects'
import app                             from '../../data/config/app'
import authService                     from '../services/authService'

const name = `auth`
const appState = app()

export const types = {
  AUTH_SAGA: `${ name }/AUTH_SAGA`,
}

const defaultState = {
  appState,
  authService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processSend() {
  try {
    const state = yield select()
    const service = state.authService
    const config = state.appState

    // const connection = yield service.init({ config })
    // const result = yield service.sendApplePush({ deviceToken,connection })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaSend() {
  yield takeEvery(types.AUTH_SAGA, processSend)
}

const sagaList = [
  sagaSend(),
]

export default {
  types,
  reducer,
  sagaList,
}