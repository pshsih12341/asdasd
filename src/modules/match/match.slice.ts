import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadMatchById } from './match.thunks';


interface Club {
  team_name: string;
  team_photo: string;
}

interface Stadium {
  stadium_name: string;
}

interface Tournament {
  id: number;
  tournament_name: string;
}

interface Bids {
  win_bids: number;
  draw_bids: number;
  loss_bids: number;
  win_points: number;
  draw_points: number;
  loss_points: number;
}

interface Game {
  id: number;
  date: string;
  time: string;
  home_goals: number;
  away_goals: number;
  status: string;
  club_away_id: Club;
  club_home_id: Club;
  stadium_id: Stadium;
  tournament_id: Tournament;
  tournament_type_id: {
    tournament_type_name: string;
  };
}

interface Vote {
  [key: string]: string | number;
}

export interface LineUpPerson {
  full_name:string,
  position:string,
}

export interface Match {
  game_id: Game;
  broadcast: string;
  home_possession: number;
  away_possession: number;
  home_shots: number;
  away_shots: number;
  home_target: number;
  away_target: number;
  home_corners: number;
  away_corners: number;
  home_bars: number;
  away_bars: number;
  home_fouls: number;
  away_fouls: number;
  photos: Array<{
    photo: string;
  }>;
  lineup_home: LineUpPerson[];
  lineup_away: LineUpPerson[];
  vote: Vote;
  bids: Bids;
}


interface MatchState {
  data: Match | null;
  loading: boolean;
  error: string | null;
}


const initialState: MatchState = {
  data: null,
  loading: false,
  error: null,
};

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMatchById.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMatchById.fulfilled, (state, action: PayloadAction<Match>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadMatchById.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

