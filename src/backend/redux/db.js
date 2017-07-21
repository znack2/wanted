import { takeEvery,put,select }        from 'redux-saga/effects'
import database                        from '../database/database'
import seeder                          from '../database/seeders/seederDefault'
import db                              from '../../data/config/db'
import app                             from '../../data/config/app'
import seedData                        from '../../data/seed/seedData'
// import userRepository       from '../database/repositories/userRepository'


const name = `db`
const dbState = db()
const appState = app()

export const types = {
  SEED_SAGA: `${ name }/SEED_SAGA`,
  CONNECT_SAGA: `${ name }/CONNECT_SAGA`,
  MIGRATE_SAGA: `${ name }/MIGRATE_SAGA`,
}

const defaultState = {
  dbState,
  appState
}

const reducer = (state = defaultState, action) => {
  return state
}

function* processSeed() {
  try {
    const state = yield select()
    const configDB = state.dbState
    const configApp = state.appState

    console.log('***************')
    console.log(configDB)
    console.log('***************')
    console.log(configApp)
    console.log('***************')

    const dbInit = yield database.init({ configDB })

    console.log('*******1********')

    const resultSync = yield db.sequelize.sync({ force: true })

    console.log('*******2********')

    const result = yield seeder.seedData(dbInit);

    // yield put({ type: types.SEED_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.SEED_FAILED, payload: { error } })
  }
}

function* processMigrate() {
  try {
    const state = yield select()
    const configDB = state.dbState
    const configApp = state.appState

    // yield put({ type: types.SEED_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.SEED_FAILED, payload: { error } })
  }
}

function* processConnect() {
  try {

    //get repo name and params
    //connect database init
    //connect database



    // rest - do logic with response/response ( routes/controllers/middleware/transformers )
    // db - work with db ( models/seed/migrations/repositories/connection )

    const state = yield select()
    const configDB = state.dbState
    const configApp = state.appState

    // const dbInit = yield database.init({ configDB })
    // const data = yield repository.init({ dbInit })
    // const result = yield controller.response({ data })

    // yield put({ type: types.SEED_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.SEED_FAILED, payload: { error } })
  }
}


function* sagaConnect() {
  yield takeEvery(types.CONNECT_SAGA, processConnect)
}
function* sagaSeed() {
  yield takeEvery(types.SEED_SAGA, processSeed)
}

function* sagaMigrate() {
  yield takeEvery(types.MIGRATE_SAGA, processMigrate)
}

const sagaList = [
  sagaConnect(),
  sagaSeed(),
  sagaMigrate(),
]

export default {
  types,
  reducer,
  sagaList,
}