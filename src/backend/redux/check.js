import { takeEvery,put,select }        from 'redux-saga/effects'
import app                             from '../../data/config/app'
import validateService                 from '../services/validateService'

const name = `check`
const appState = app()

export const types = {
  VALIDATE_EMAIL_SAGA: `${ name }/VALIDATE_EMAIL_SAGA`,
  VALIDATE_PASSWORD_SAGA: `${ name }/VALIDATE_PASSWORD_SAGA`,
}

const defaultState = {
  appState,
  validateService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processValidate() {
  try {
    const state = yield select()
    const service = state.validateService
    const config = state.appState

    const result = yield service.init({ config })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaValidateEmail() {
  yield takeEvery(types.VALIDATE_EMAIL_SAGA, processValidate)
}

function* sagaValidatePassword() {
  yield takeEvery(types.VALIDATE_PASSWORD_SAGA, processValidate)
}

const sagaList = [
  sagaValidateEmail(),
  sagaValidatePassword(),
]

export default {
  types,
  reducer,
  sagaList,
}