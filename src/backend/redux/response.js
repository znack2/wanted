import { takeEvery,put,select }        from 'redux-saga/effects'
import app                             from '../../data/config/app'
import responseService                 from '../services/responseService'

const name = `response`
const appState = app()

export const types = {
  RESPONSE_SAGA: `${ name }/RESPONSE_SAGA`,
  FAILURE_SAGA: `${ name }/FAILURE_SAGA`,
}

const defaultState = {
  appState,
  responseService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processResponse() {
  try {
    const state = yield select()
    const service = state.responseService
    const config = state.appState

    const result = yield service.init({ config })

    // return helper.sendData()
    // helper.sendFailureMessage()

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* processFailure() {
  try {
    const state = yield select()
    const service = state.responseService
    const config = state.appState

    const result = yield service.init({ config })

    // return helper.sendData()
    // helper.sendFailureMessage()

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaResponse() {
  yield takeEvery(types.RESPONSE_SAGA, processResponse)
}

function* sagaFailureMessage() {
  yield takeEvery(types.FAILURE_SAGA, processFailure)
}

const sagaList = [
  sagaResponse(),
  sagaFailureMessage(),
]

export default {
  types,
  reducer,
  sagaList,
}