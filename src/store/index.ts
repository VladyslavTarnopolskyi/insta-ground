import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  rootReducer,
  enhancer
);

sagaMiddleware.run(rootSaga);

export default store;
