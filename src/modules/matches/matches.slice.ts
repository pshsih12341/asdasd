import { createSlice } from '@reduxjs/toolkit';
import { loadMatches } from './matches.thunks';

export interface Match {
    id:number,
    date:string,
    time:string,
    home_goals:number,
    away_goals:number,
    status:string,
    club_away_id:{
      team_name:string,
      team_photo:string,
    }
    club_home_id:{
      team_name:string,
      team_photo:string,
    }
    stadium_id:{
      stadium_name:string
    }
    tournament_id:{
      id:number,
      tournament_name:string
    }
    tournament_type_id:{
      tournament_type_name:string
    }
}

export interface MatchesState {
  data: {
    page:number,
    per_page:number,
    total:number,
    games:Match[]
  } | null;
  loading: boolean;
  error?: string | null ;
}

const initialState: MatchesState = {
  data: null,
  loading: false,
  error: null
};

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addCase(loadMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(loadMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
