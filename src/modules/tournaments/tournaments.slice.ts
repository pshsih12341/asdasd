import { createSlice } from '@reduxjs/toolkit';

export interface Tournament {
    id:number,
    tournament_name:string,
}


export interface TournamentsState {
  data: {
    tournaments:Tournament[]
  };
  loading: boolean;
  error?: string | null ;
}

const initialState: TournamentsState = {
  data: {
    tournaments: [
        {
          "id": 1,
          "tournament_name": "Суперлига F"
        }
      ]
  },
  loading: false,
  error: null
};

export const tournamentsSlice = createSlice({
  name: 'tournaments',
  initialState,
  reducers: {},
});
