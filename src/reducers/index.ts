import { combineReducers, Reducer } from 'redux';

import { Reducers, Store } from './types';

import MediaReducer from './photos';

const reducers: Reducers = {
  mediaList: MediaReducer
};

const rootReducer: Reducer<Store> = combineReducers<Store>({
  ...reducers,
});

export default rootReducer;
