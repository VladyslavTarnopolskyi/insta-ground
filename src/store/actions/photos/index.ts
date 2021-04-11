import { AnyAction } from 'redux';

export function fetchMediaList(params?: any): AnyAction {
  return {
    payload: params,
    type: 'FETCH_MEDIA_LIST_REQUEST'
  };
}
