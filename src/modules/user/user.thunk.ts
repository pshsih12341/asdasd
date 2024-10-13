import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthData {
  client_id: string;
  grant_type: string;
  code_verifier: string;
  device_id: string;
  code: string;
  redirect_uri: string;
}

export const getAccesToken = createAsyncThunk(
  'auth/fetchAuthData',
  async (authData: AuthData,{rejectWithValue} ) => {

    try {
    const response = await axios.post('https://id.vk.com/oauth2/auth', null, {
      params: authData,
    });
    return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
