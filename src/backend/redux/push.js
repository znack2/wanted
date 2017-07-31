import { takeEvery,put,select }        from 'redux-saga/effects'
import app                             from '../../data/config/app'
import pushService                     from '../services/pushService'

const name = `push`
const appState = app()

export const types = {
  PUSH_SAGA: `${ name }/PUSH_SAGA`,
}

const defaultState = {
  appState,
  pushService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processSend() {
  try {
    const state = yield select()
    const service = state.pushService
    const config = state.appState

    // const connection = yield service.init({ config })
    // const result = yield service.sendApplePush({ deviceToken,connection })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaSend() {
  yield takeEvery(types.PUSH_SAGA, processSend)
}

const sagaList = [
  sagaSend(),
]

export default {
  types,
  reducer,
  sagaList,
}