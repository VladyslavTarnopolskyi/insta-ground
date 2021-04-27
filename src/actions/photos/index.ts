import { AnyAction } from 'redux';

import { PHOTOS_ACTION } from './types';

export function fetchMediaList(params?: any): AnyAction {
  return {
    payload: params,
    type: PHOTOS_ACTION.FETCH_MEDIA_LIST_REQUEST
  };
}
