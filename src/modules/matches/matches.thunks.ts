import { GAMES_SERVICE } from "@/api/baseApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {BASE_URL} from "../../api/baseApi";

export const loadMatches = createAsyncThunk(
  'matches/loadMatches',
  async ({ season, selectedTournament }: { season: string; selectedTournament?: number }, { rejectWithValue }) => {
      try {
          const url = selectedTournament
              ? `${GAMES_SERVICE}games/?tournament=${selectedTournament}&season=${season}`
              : `${GAMES_SERVICE}games/?season=${season}`;
          const response = await axios.get(url);
          return response.data;
      } catch (error: any) {
          return rejectWithValue(error.response?.data || 'Something went wrong');
      }
  }
);
