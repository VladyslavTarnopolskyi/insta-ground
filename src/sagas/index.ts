import { all, takeLatest } from 'redux-saga/effects';

import * as Media from './media';

import { PHOTOS_ACTION } from '../actions/photos/types';

export default function* rootSaga() {
  yield all([
    takeLatest(PHOTOS_ACTION.FETCH_MEDIA_LIST_REQUEST, Media.fetchMediaList),
  ]);
}
