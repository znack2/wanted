import { applyMiddleware, createStore, compose }  from 'redux'
import createSagaMiddleware                       from 'redux-saga'

import rootReducer                                from './rootReducer'
import rootSaga                                   from './rootSaga'


const composeEnchancers = compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnchancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store
