import { AnyAction } from 'redux';

import { State, MediaListState } from './types';
import { PHOTOS_ACTION } from '../../actions/photos/types';
import { GetResponse } from "../../rest/photos/types";

const INITIAL_STATE: State = {
  isLoading: false,
  isError: false,
  mediaList: {}
};

const prepareData = ({data: {data, paging: {next, previous}}}: GetResponse): MediaListState => ({data, next, previous});

export default function (
  state: State = INITIAL_STATE,
  action: AnyAction
): State {
  switch (action.type) {
    case PHOTOS_ACTION.FETCH_MEDIA_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PHOTOS_ACTION.FETCH_MEDIA_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mediaList: prepareData(action.payload)
      };
    case PHOTOS_ACTION.FETCH_MEDIA_LIST_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
