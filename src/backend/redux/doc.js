// import { takeEvery,put,select }        from 'redux-saga/effects'
// // import app                             from '../../data/config/app'
//
// const name = `doc`
// const appState = app()
//
// export const types = {
//   DOC_SAGA: `${ name }/DOC_SAGA`,
// }
//
// const defaultState = {
//   appState,
// }
//
// const reducer = (state = defaultState, action) => {
//   return state
// }
//
// function* processSetup() {
//   try {
//     const state = yield select()
//     const service = state.logService
//     const config = state.appState
//
//     const result = yield service.init({ config })
//
//     // yield put({ type: types.EMAIL_SUCCESS, payload: result })
//   } catch (error) {
//     // yield put({ type: types.EMAIL_FAILED, payload: { error } })
//   }
// }
//
// function* sagaSetup() {
//   yield takeEvery(types.DOC_SAGA, processSetup)
// }
//
// const sagaList = [
//   sagaSetup(),
// ]
//
// export default {
//   types,
//   reducer,
//   sagaList,
// }