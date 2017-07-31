import Reactotron                                 from 'reactotron-react-js'
import { reactotronRedux }                        from 'reactotron-redux'
import { applyMiddleware, createStore, compose }  from 'redux'
import createSagaMiddleware                       from 'redux-saga'
import createLogger                               from 'redux-logger'

import rootReducer                                from './rootReducer'
import rootSaga                                   from './rootSaga'
// import DevTools from '../containers/DevTools';
import './ReactotronConfig'


Reactotron
  .configure()
  .use(reactotronRedux())
  .connect()


const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose

const sagaMiddleware = createSagaMiddleware()

const store = Reactotron.createStore(
  rootReducer,
  composeEnchancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store







export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  const middlewares = [
    sagaMiddleware,
    process.env.NODE_ENV === 'development' && logger,
  ].filter(Boolean);


  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  );
}