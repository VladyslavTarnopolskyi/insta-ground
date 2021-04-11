import { combineReducers, Reducer } from 'redux';

import history from '../../helpers/history';

import { connectRouter } from 'connected-react-router';

import { Reducers, State } from './types';

import MediaReducer from './photos';

const reducers: Reducers = {
  mediaList: MediaReducer
};

const rootReducer: Reducer<State> = combineReducers<State>({
  ...reducers,
  router: connectRouter(history)
});

export default rootReducer;
