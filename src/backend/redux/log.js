import { takeEvery,put,select }        from 'redux-saga/effects'
import app                          from '../../data/config/app'
import logService                      from '../services/logService'

const name = `log`
const appState = app()

export const types = {
  LOG_SAGA: `${ name }/LOG_SAGA`,
}

const defaultState = {
  appState,
  logService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processCreate() {
  try {
    const state = yield select()
    const service = state.logService
    const config = state.appState

    const result = yield service.init({ config })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaSend() {
  yield takeEvery(types.LOG_SAGA, processCreate)
}

const sagaList = [
  sagaSend(),
]

export default {
  types,
  reducer,
  sagaList,
}