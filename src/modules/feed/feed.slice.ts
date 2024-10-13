import { createSlice } from '@reduxjs/toolkit';
import { fetchFeed } from './feed.thunks';

export interface FeedState {
  data: {
    page: number;
    feeds: Feed[];
  };
  loading: boolean;
  error?: string | null;
}

export interface Feed {
  img: string;
  title: string;
  tag: string;
  date: Date;
}

const initialState: FeedState = {
  data: {
    page: 1,
    feeds: [
      {
        img: 'https://avatars.mds.yandex.net/i?id=a7d60ce81b56f753070e916f6504a2d4_l-5300120-images-thumbs&n=13',
        title: 'Breaking News: React 18 Released',
        tag: 'Technology',
        date: new Date('2024-10-01'),
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=a7d60ce81b56f753070e916f6504a2d4_l-5300120-images-thumbs&n=13',
        title:
          'New AI Tool Revolutionizes Designsadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        tag: 'Artificial Intelligence',
        date: new Date('2024-09-28'),
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=a7d60ce81b56f753070e916f6504a2d4_l-5300120-images-thumbs&n=13',
        title: 'Top 10 Trends in Web Development',
        tag: 'Web Development',
        date: new Date('2024-09-25'),
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=a7d60ce81b56f753070e916f6504a2d4_l-5300120-images-thumbs&n=13',
        title: 'Sustainable Tech: Innovations in 2024',
        tag: 'Environment',
        date: new Date('2024-09-15'),
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=a7d60ce81b56f753070e916f6504a2d4_l-5300120-images-thumbs&n=13',
        title: 'How 5G Will Change the Future',
        tag: 'Technology',
        date: new Date('2024-09-10'),
      },
    ],
  },
  loading: false,
  error: null,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addCase(fetchFeed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeed.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
