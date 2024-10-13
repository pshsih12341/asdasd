import { createSlice } from '@reduxjs/toolkit';
import { loadCards } from './card.thunk';

export interface CardState {
  data: {
    numberPacks:number,
    cards:string[];
  }| null;
  loading: boolean;
  error?: string | null;
}

const initialState:CardState = {
  data: null,
  loading: false,
  error: null,
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      return builder
        .addCase(loadCards.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loadCards.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        })
        .addCase(loadCards.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  