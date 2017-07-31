import { takeEvery,put,select }        from 'redux-saga/effects'
import app                             from '../../data/config/app'
import fileService                     from '../services/fileService'

const name = `file`
const appState = app()

export const types = {
  FILE_SAGA: `${ name }/FILE_SAGA`,
}

const defaultState = {
  appState,
  fileService
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processSave() {
  try {
    const state = yield select()
    const service = state.fileService
    const config = state.appState

    const connection = yield service.init({ config })
    const result = yield service.save({ connection })

    // yield put({ type: types.EMAIL_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.EMAIL_FAILED, payload: { error } })
  }
}

function* sagaSave() {
  yield takeEvery(types.FILE_SAGA, processSave)
}

const sagaList = [
  sagaSave(),
]

export default {
  types,
  reducer,
  sagaList,
}
