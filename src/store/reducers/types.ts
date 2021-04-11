import { Reducer } from 'redux';

import { RouterState } from 'connected-react-router';

import { State as MediaReducer } from './photos/types';

export interface Store {
  mediaList: MediaReducer;
}

export interface Reducers {
  mediaList: Reducer<MediaReducer>;
}

export interface State extends Store {
  router: RouterState;
}
