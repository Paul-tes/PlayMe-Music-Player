import { createSlice } from "@reduxjs/toolkit";
import songList from "../mockData";

export const SongSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: songList,
    isLoading: false
  },
  reducers: {

  }
});
