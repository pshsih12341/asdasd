import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchFeedRequest, fetchFeedRequest } from '../../api/fetchFeedApi';

export const fetchFeed = createAsyncThunk<
  FetchFeedRequest,
  void,
  { rejectValue: string }
>('feed/fetchFeed', async (_, thunkApi) => {
  try {
    const res = await fetchFeedRequest();

    return res.data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(err);
  }
});
