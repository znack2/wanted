import { takeEvery,put,select }        from 'redux-saga/effects'
import dbInit                          from '../database/database'
import seeder                          from '../database/seeders/seederDefault'
import config                          from '../../data/config/db'
import seedData                        from '../../data/seed/seedData'

const name = `db`

const types = {
  SEED_SAGA: `${ name }/SEED_SAGA`,
  MIGRATE_SAGA: `${ name }/MIGRATE_SAGA`,
}

const reducer = (state = config, action) => {
  return state
}

function* processSeed() {
  try {
    const state = yield select()

    const PORT = state.db.PORT
    const db = yield dbInit.init({ PORT })

    const resultSync = yield db.sequelize.sync({ force: true })
    const result = yield seeder.seedData(db);

    // yield put({ type: types.SEED_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.SEED_FAILED, payload: { error } })
  }
}

function* processMigrate() {
  try {
    const state = yield select()
    const PORT = state.db.PORT

    // yield put({ type: types.SEED_SUCCESS, payload: result })
  } catch (error) {
    // yield put({ type: types.SEED_FAILED, payload: { error } })
  }
}

function* sagaSeed() {
  yield takeEvery(types.SEED_SAGA, processSeed)
}

function* sagaMigrate() {
  yield takeEvery(types.MIGRATE_SAGA, processMigrate)
}

const sagaList = [
  sagaSeed(),
  sagaMigrate(),
]

export default {
  types,
  reducer,
  sagaList,
}