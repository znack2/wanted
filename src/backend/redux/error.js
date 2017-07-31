import { takeEvery,put,select }        from 'redux-saga/effects'
import app                             from '../../data/config/app'
import errorService                    from '../services/errorService'

const name = `error`
const appState = app()

export const types = {
  ERROR_SAGA: `${ name }/ERROR_SAGA`,
}

const defaultState = {
  appState,
  errorService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processError() {
  try {
    const state = yield select()
    const service = state.errorService
    const config  = state.appState

    const result = yield service.init({ config })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaError() {
  yield takeEvery(types.ERROR_SAGA, processError)
}

const sagaList = [
  sagaError(),
]

export default {
  types,
  reducer,
  sagaList,
}


