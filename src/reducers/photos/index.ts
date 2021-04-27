import { AnyAction } from 'redux';

import { State } from './types';
import { PHOTOS_ACTION } from '../../actions/photos/types';

const INITIAL_STATE: State = {
  // isLoading: false,
  // isError: false,
  mediaList: {
    data: {
      data: [],
      paging: {
        cursors: {
          after: '',
          before: ''
        },
        next: '',
        previous: ''
      }
    },
  }
};

export default function(
  state: State = INITIAL_STATE,
  action: AnyAction
): State {
  switch (action.type) {
    case PHOTOS_ACTION.FETCH_MEDIA_LIST:
      return {
        ...state,
        // isLoading: true,
        // isError: false,
        mediaList: action.payload
      };
    case PHOTOS_ACTION.FETCH_MEDIA_LIST_SUCCESS:
      return {
        ...state,
        // isError: false,
        // isLoading: false
      };
    case PHOTOS_ACTION.FETCH_MEDIA_LIST_FAILURE:
      return {
        ...state,
        // isError: true,
        // isLoading: false
      };
    default:
      return state;
  }
}
