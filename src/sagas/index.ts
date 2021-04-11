import { all, takeLatest } from 'redux-saga/effects';

import * as Media from './media';

export default function* rootSaga() {
  yield all([
    takeLatest('FETCH_MEDIA_LIST_REQUEST', Media.fetchMediaList),
  ]);
}
