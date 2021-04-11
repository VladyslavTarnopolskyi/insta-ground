export interface GetResponse {
  data: {
    data: Media[];
    paging: {
      cursors: {
        after: string;
        before: string;
      }
      next: string;
      previous: string;
    };
  };
}

export interface Media {
  id: string;
  media_url: string;
  timestamp: string;
  username: string;
  caption: string;
  media_type: string;
}
