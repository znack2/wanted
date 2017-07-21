import { takeEvery,put,select }        from 'redux-saga/effects'
import database                        from '../database/database'
import seeder                          from '../database/seeders/seederDefault'
import db                              from '../../data/config/db'
import app                             from '../../data/config/app'
import seedData                        from '../../data/seed/seedData'

const name = `db`
const dbState = db()
const appState = app()

export const types = {
  SEED_SAGA: `${ name }/SEED_SAGA`,
  INIT_SAGA: `${ name }/INIT_SAGA`,
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

function* processInit() {
  try {

    console.log('*******helllo********')

    const state = yield select()
    const configDB = state.dbState
    const configApp = state.appState

    const dbInit = yield database.init({ configDB })

    // yield put({ type: types.SEED_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.SEED_FAILED, payload: { error } })
  }
}


function* sagaInit() {
  console.info('******* 0 ********')
  yield takeEvery(types.INIT_SAGA, processInit)
}
function* sagaSeed() {
  yield takeEvery(types.SEED_SAGA, processSeed)
}

function* sagaMigrate() {
  yield takeEvery(types.MIGRATE_SAGA, processMigrate)
}

const sagaList = [
  sagaInit(),
  sagaSeed(),
  sagaMigrate(),
]

export default {
  types,
  reducer,
  sagaList,
}