import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';

import { getAllMedia } from '../../rest/photos/photos.service';
import { PHOTOS_ACTION } from '../../actions/photos/types';

export function* fetchMediaList(action: AnyAction) {
  try {
    const response = yield call(getAllMedia, action.payload);
    yield put({
      payload: response,
      type: PHOTOS_ACTION.FETCH_MEDIA_LIST
    });

    yield put({
      type: PHOTOS_ACTION.FETCH_MEDIA_LIST_SUCCESS
    });
  } catch (error) {
    yield put({
      error: error.message,
      type: PHOTOS_ACTION.FETCH_MEDIA_LIST_FAILURE
    });
  }
}
