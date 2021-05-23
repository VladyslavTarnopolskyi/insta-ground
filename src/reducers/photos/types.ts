import { Media } from '../../rest/photos/types';

export interface MediaListState {
  data?: Media[];
  next?: string;
  previous?: string;
}

export interface State {
  isLoading: boolean;
  isError: boolean;
  mediaList: MediaListState;
}
