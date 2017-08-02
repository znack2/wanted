import { takeEvery, put, select }       from 'redux-saga/effects'
import app                              from '../../data/config/app'
import server                           from '../server'

const name = `app`


export const types = {
  // LOAD_SAGA: `${ name }/LOAD_SAGA`,

  START_SAGA: `${ name }/START_SAGA`,
  STOP_SAGA: `${ name }/STOP_SAGA`,

  // LOAD_SUCCESS: `${ name }/LOAD_SUCCESS`,
  // START_SUCCESS: `${ name }/STOP_SAGA`,
  // START_FAILED: `${ name }/STOP_SAGA`,
}

const reducer = (state = app(), action) => {
  const { type, payload } = action
  switch (type) {
    case types.LOAD_SUCCESS: {
      return {
        ...state,
        ...payload,
      }
    }
    default:
      return state
  }
}



// function* processLoad() {
//   try {
//     yield put({ type: types.LOAD_SUCCESS, payload: { PORT: 3000 } })
//   } catch (error) {
//     console.log(error)
//   }
// }
//
// function* sagaLoad() {
//   yield takeEvery(types.LOAD_SAGA, processLoad)
// }

function* processStart() {
  try {
    const state = yield select()
    const config = state.app

    const result = yield server.init({ config })

    // yield put({ type: types.START_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.START_FAILED, payload: { error } })
  }
}

function* processStop() {
  try {
    const state = yield select()
    const config = state.app.PORT

    console.log('stop server')
    // const result = yield server.stop({ config })

    // yield put({ type: types.START_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.START_FAILED, payload: { error } })
  }
}

function* sagaStart() {
  yield takeEvery(types.START_SAGA, processStart)
}

function* sagaStop() {
  yield takeEvery(types.STOP_SAGA, processStop)
}

const sagaList = [
  // sagaLoad(),
  sagaStart(),
  sagaStop(),
]

export default {
  types,
  reducer,
  sagaList,
}