import { createSlice } from "@reduxjs/toolkit";
import songList from "../mockData";

export const SongSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: songList,
    isLoading: false
  },
  reducers: {
    addSong: (state, action) => {
      // Add the new song to the songs array
      state.songs.push(action.payload);
    },
    updateSong: (state, action) => {
      const { id, updatedSong } = action.payload;
      // Find the index of the song to be updated
      const index = state.songs.findIndex(song => song.id === id);
      if (index !== -1) {
        // Update the song at that index with the new data
        state.songs[index] = { ...state.songs[index], ...updatedSong };
      }
    },
    deleteSong: (state, action) => {
      const { id } = action.payload;
      // Remove the song from the songs array
      state.songs = state.songs.filter(song => song.id !== id);
    }
  }
});

// Export the actions and reducer
export const { addSong, updateSong, deleteSong } = SongSlice.actions;
export default SongSlice.reducer;
