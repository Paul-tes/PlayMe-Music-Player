import { configureStore } from '@reduxjs/toolkit'
import SongReducer from './Song/SongSlice'

export const store = configureStore({
  reducer: {
    songs: SongReducer
  },
})

