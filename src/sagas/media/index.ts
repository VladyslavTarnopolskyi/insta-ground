import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';

import { getAllMedia } from '../../rest/photos/photos.service';

export function* fetchMediaList(action: AnyAction) {
  try {
    const response = yield call(getAllMedia, action.payload);
    yield put({
      payload: response,
      type: 'SAVE_MEDIA_LIST'
    });

    yield put({
      type: 'FETCH_MEDIA_LIST_SUCCESS'
    });
  } catch (error) {
    yield put({
      error: error.message,
      type: 'FETCH_MEDIA_LIST_FAILURE'
    });
  }
}
