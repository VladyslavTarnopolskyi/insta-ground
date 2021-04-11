import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';


import { routerMiddleware } from 'connected-react-router';

import history from '../history';

import rootReducer from '../../store/reducers';
import rootSaga from './../../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);

export default store;
