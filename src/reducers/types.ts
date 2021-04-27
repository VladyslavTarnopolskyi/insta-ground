import { Reducer } from 'redux';

import { State as MediaReducer } from './photos/types';

export interface Store {
  mediaList: MediaReducer;
}

export interface Reducers {
  mediaList: Reducer<MediaReducer>;
}
