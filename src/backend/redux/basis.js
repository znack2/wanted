import { takeEvery,put,select }        from 'redux-saga/effects'
// import _update              from 'immutability-helper'
// import uuid                 from 'uuid/v4'

export default ({ name, processName = `START` }) => {

  const processNameDone = `${ processName }_DONE`

  const types = {
    [processName]:      `${ name }/${ processName }`,
    [processNameDone]:  `${ name }/${ processName }_DONE`,
    [processNameFail]:  `${ name }/${ processName }_FAIL`,
  }

  const defaultState = {}
  /**
   *   Process CREATE_DONE action and write to data record by id and id in order Array
   */
  const reducerMap = {
    [processNameDone]: (state = defaultState, action) => {
      return {
        ...state,
      }
    }
  }

  // const reducerMap = {
  //   [types[processNameDone]]: (state, { payload }) => _update(state, {
  //     data: {
  //       $merge: { [payload.id]: payload },
  //     },
  //     order: {
  //       $push: [payload.id],
  //     },
  //   })
  // }


  /**
   *   Process redux action with type CREATE and if entity id is undefined generate id as uuid() and
   * push it to reducer as CREATE_DONE action
   */
  //   function* processCreate({ payload }) {
  //     try {
  //       yield put({ type: types[processNameDone], payload: { ...payload, id: payload.id || uuid() } })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  /**
   * On every action type CREATE we run processCreate
   */
  //   function* saga() {
  //     yield takeEvery(types[processName], processCreate);
  //   }

  return {
    reducerMap,
    sagaList,
    types,
  }
}
