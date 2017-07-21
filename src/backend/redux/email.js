import { takeEvery,put,select }        from 'redux-saga/effects'
import app                          from '../../data/config/app'
import emailService                    from '../services/emailService'

const name = `email`
const appState = app()

export const types = {
  EMAIL_SAGA: `${ name }/EMAIL_SAGA`,
}

const defaultState = {
  appState,
  emailService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processEmail() {
  try {
    const state = yield select()
    const service = state.emailService
    const config = state.appState

    const result = yield service.init({ config })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaEmail() {
  yield takeEvery(types.EMAIL_SAGA, processEmail)
}

const sagaList = [
  sagaEmail(),
]

export default {
  types,
  reducer,
  sagaList,
}