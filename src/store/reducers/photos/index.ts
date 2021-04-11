import { AnyAction } from 'redux';

import { State } from './types';

const INITIAL_STATE: State = {
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
    }
  }
};

export default function(
  state: State = INITIAL_STATE,
  action: AnyAction
): State {
  switch (action.type) {
    case 'SAVE_MEDIA_LIST':
      return {
        ...state,
        mediaList: action.payload
      };
    default:
      return state;
  }
}
