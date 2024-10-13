import api from "./baseApi";

export interface FetchFeedRequest {
  message: string;
}

export const fetchFeedRequest = async () => {
  return await api.get<FetchFeedRequest>('feed');
}