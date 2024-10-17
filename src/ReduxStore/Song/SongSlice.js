import { createSlice } from "@reduxjs/toolkit";

export const SongSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchSongsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addSongRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    addSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSongRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action) => {
      state.isLoading = false;
      const { id, updatedSong } = action.payload;
      const index = state.songs.findIndex(song => song.id === id);
      if (index !== -1) {
        state.songs[index] = { ...state.songs[index], ...updatedSong };
      }
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteSong: (state, action) => {
      const { id } = action.payload;
      state.songs = state.songs.filter(song => song.id !== id);
    }
  }
});

// Export the actions and reducer
export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSong
} = SongSlice.actions;

export default SongSlice.reducer;
