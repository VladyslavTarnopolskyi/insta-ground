export interface GetResponse {
  data: ResponseData;
}

export interface Media {
  id: string;
  media_url: string;
  timestamp: string;
  username: string;
  caption: string;
  media_type: string;
}

export interface ResponseData {
  data: Media[];
  paging: Paging;
}

export interface Paging {
  cursors: Cursors;
  next: string;
  previous: string;
}

export interface Cursors {
  after: string;
  before: string;
}
