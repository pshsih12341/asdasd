import { createSlice } from '@reduxjs/toolkit';

export interface Player {
    id:number,
    fullname:string,
    birthday:string,
    number:number,
    position:string,
    year_in:number,
    year_out:number,
    photo:string
}


export interface PlayersState {
  data: {
    page: number,
    per_page: number,
    total: number,
    players: Player[]
  };
  loading: boolean;
  error?: string | null ;
}

const initialState: PlayersState = {
  data: {
    "page": 1,
    "per_page": 10,
    "total": 10,
    "players": [
      {
        "id": 1,
        "fullname": "Иванов Иван Иванович",
        "birthday": "1970-05-05",
        "number": 10,
        "position": "Нападающий",
        "year_in": 2023,
        "year_out": 0,
        "photo": "playerPhotos/photo.jpg"
      },
      {
        "id": 1,
        "fullname": "Иванов Иван Иванович",
        "birthday": "1970-05-05",
        "number": 10,
        "position": "Нападающий",
        "year_in": 2023,
        "year_out": 0,
        "photo": "playerPhotos/photo.jpg"
      },
      
    ]
  },
  loading: false,
  error: null
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
});
