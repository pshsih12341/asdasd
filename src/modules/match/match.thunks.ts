import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GAMES_SERVICE } from "../../api/baseApi";

export const loadMatchById = createAsyncThunk(
  'match/loadMatchById',
  async (matchId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${GAMES_SERVICE}games/game_info/${matchId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
